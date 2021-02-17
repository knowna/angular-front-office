﻿import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { Observable } from 'rxjs/Rx';
import { DatePipe } from '@angular/common';
import { SaleBookCustomer } from 'src/app/Model/SaleBook';
import { JournalVoucherService } from 'src/app/Service/journalVoucher.service';
import { Global } from 'src/app/Shared/global';
import { Account } from 'src/app/Model/Account/account';

import * as XLSX from 'xlsx';
//generating pdf
import * as jsPDF from 'jspdf'
import 'jspdf-autotable';

@Component({
    templateUrl: './AccountSaleBookCustomer.Component.html'
})

export class AccountSaleBookCustomer {
    currentYear: any;
    currentUser: any;
    company: any;
    SaleBooks: SaleBookCustomer[];
    public accountledger: Account[];
    msg: string;
    isLoading: boolean = false;
    modalRef: BsModalRef;
    selectedName: any = "";

    toExportFileName: string = 'Sales Customer Wise-' + this.date.transform(new Date, "yyyy-MM-dd") + '.xlsx';
    toPdfFileName: string = 'Sales Customer Wise-' + this.date.transform(new Date, "yyyy-MM-dd") + '.pdf';

    /**
     * Sale Book Constructor
     */
    constructor(private _journalvoucherService: JournalVoucherService, private modalService: BsModalService, private date: DatePipe) {
        this._journalvoucherService.getAccounts().subscribe(data => { this.accountledger = data });
        this.currentYear = JSON.parse(localStorage.getItem('currentYear'));
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.company = JSON.parse(localStorage.getItem('company'));
    }
    selectedAccountName() {
        return this.accountledger.find(x => x.Id == this.selectedName).Name;
    }
    SearchLedgerTransaction(CurrentLedgerId: string) {
        this.isLoading = true;
        this._journalvoucherService.get(Global.BASE_ACCOUNTSALEBOOK_ENDPOINT + '?CustomerId=' + CurrentLedgerId + "&&FinancialYear=" + (this.currentYear['Name']) + "&&CustomerReport=CustomerReport" + "&&report=report")
            .subscribe(SB => {
                this.SaleBooks = SB; this.isLoading = false;
            },
                error => this.msg = <any>error);
    }

    exportTableToPdf() {
        var doc = new jsPDF("p", "mm", "a4");
        var rows = [];
        let sn = 1;


        rows.push(['S.No','Date','Invoice No','','Amount']);

        this.SaleBooks.forEach(SaleBook => {
            var tempSaleBook = [
                sn,
                this.date.transform(SaleBook.VDate,'yyyy.MM.dd'),
                SaleBook.BillNo,
                '',
                SaleBook.TotalSale.toFixed(2)
            ];

            sn = sn * 1 + 1;

            rows.push(tempSaleBook);

            if(SaleBook.SalesBillItems.length > 0) {

                rows.push(['','Name','Qty (UT)','Rate','Amount']);

                SaleBook.SalesBillItems.forEach(IRItemName => {
                    var tempIRItemName = [
                        '',
                        IRItemName.ItemName,
                        IRItemName.Quantity,
                        IRItemName.Rate,
                        IRItemName.Amount.toFixed(2),
                    ];

                    rows.push(tempIRItemName);
                });
            }





        });

        rows.push(['','','','Total',this.calcTotalSale(this.SaleBooks).toFixed(2)]);

        doc.setFontSize(14);
        doc.text(80,20, `${this.company?.NameEnglish}`);
        doc.text(80,30,`${this.selectedAccountName()} Sales Book`);
        doc.text(80,40,`${this.date.transform(this.currentYear?.NepaliStartDate,'yyyy.MM.dd')} - ${this.date.transform(this.currentYear?.NepaliEndDate,'yyyy.MM.dd')}`);

        doc.autoTable({
            margin: {left: 10,bottom:20},
            setFontSize: 14,
      
            //for next page 
            startY: doc.pageCount > 1? doc.autoTableEndPosY() + 20 : 50,
            rowPageBreak: 'avoid',
            body: rows,
            bodyStyles: {
              fontSize: 9,
            },
            columnStyles: {
              5: {
                  halign: 'right',
                },
            },
      
            // customize table header and rows format
            theme: 'striped'
        });


        const pages = doc.internal.getNumberOfPages();
        const pageWidth = doc.internal.pageSize.width;  //Optional
        const pageHeight = doc.internal.pageSize.height;  //Optional
        doc.setFontSize(10);  //Optional

        for(let j = 1; j < pages + 1 ; j++) {
            let horizontalPos = pageWidth / 2;  //Can be fixed number
            let verticalPos = pageHeight - 10;  //Can be fixed number
            doc.setPage(j);
            doc.text(`${j} of ${pages}`, horizontalPos, verticalPos, {align: 'center' }); //Optional text styling});
        }
                
        doc.save(this.toPdfFileName);


    }

    exportTableToExcel(tableID, filename = '') {
        // var downloadLink;
        // var dataType = 'application/vnd.ms-excel';
        // var clonedtable = $('#' + tableID);
        // var clonedHtml = clonedtable.clone();
        // $(clonedtable).find('.export-no-display').remove();
        // var tableSelect = document.getElementById(tableID);
        // var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');
        // $('#' + tableID).html(clonedHtml.html());

        // // Specify file name
        // filename = filename ? filename + '.xls' : 'Account Customer Sale Book of ' + this.date.transform(new Date, 'dd-MM-yyyy') + '.xls';

        // // Create download link element
        // downloadLink = document.createElement("a");

        // document.body.appendChild(downloadLink);

        // if (navigator.msSaveOrOpenBlob) {
        //     var blob = new Blob(['\ufeff', tableHTML], { type: dataType });
        //     navigator.msSaveOrOpenBlob(blob, filename);
        // } else {
        //     // Create a link to the file
        //     downloadLink.href = 'data:' + dataType + ', ' + tableHTML;

        //     // Setting the file name
        //     downloadLink.download = filename;

        //     //triggering the function
        //     downloadLink.click();
        // }
        let element = document.getElementById(tableID); 
        const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

        /* generate workbook and add the worksheet */
        const wb: XLSX.WorkBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

        /* save to file */
        XLSX.writeFile(wb, this.toExportFileName);

    }

    calcTotalSale(SaleBooks) {
        var TotalSale = 0;
        for (var i = 0; i < SaleBooks.length; i++) {
            TotalSale = TotalSale + parseFloat(SaleBooks[i].TotalSale);
        }
        return TotalSale;
    }
}