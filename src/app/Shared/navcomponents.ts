export const navcomponents=[
    {
      title: 'Front Office',
      img:'../../../assets/images/frontOffice.png',
      permission:'FrontOffice',
      show: false,
      children: [
        {
          title: 'Booking',
          icon: 'fa fa-circle',
          permission:'FrontOffice:Booking',
          img:'../../../assets/images/booking.png',
          show: false,
          children: [
            {
              title: 'Reservation',
              link: 'reservation',
              img:'../../../assets/images/reservation.png',
              permission:'FrontOffice:Booking:Reservation',
              display: true
            },
            {
              title: 'Check-In',
              link: 'reservation/checkin',
              img:'../../../assets/images/check-in.png',
              permission:'FrontOffice:Booking:CheckIn',
              display: true
            },
            {
              title: 'Room Status',
              link: 'reservation/reservationstatus',
              img:'../../../assets/images/room-status.png',
              permission:'FrontOffice:Booking:RoomStatus',
              display: true
            },
            {
              title: 'Check-Out',
              link: 'reservation/checkout',
              img:'../../../assets/images/check-out.png',
              permission:'FrontOffice:Booking:CheckOut',
              display: true
            },
           
            {
              title: 'Inquiry',
              link: 'reservation/reservationinquiry',
              img:'../../../assets/images/inquiry.png',
              permission:'FrontOffice:Booking:Inquiry',
              display: true
            },
            {
              title: 'Customer',
              link: 'reservation/customer',
              img:'../../../assets/images/customer.png',
              permission:'FrontOffice:Booking:Customer',
              display: true
            }
                     
          ]
        },
        {
          title: 'Master Setup',
          permission:'FrontOffice:Master',
          img:'../../../assets/images/master.png',
          show: false,
          children: [
            {
              title: 'Payment Types',
              link: 'reservation/payment',
              permission:'FrontOffice:Master:PaymentTypes',
              img:'../../../assets/images/payment-type.png',
              display: true
            },
            {
              title: 'Facility',
              link: 'reservation/facility',
              permission:'FrontOffice:Master:Facility',
              img:'../../../assets/images/facility.png',
              display: true
            },
            {
              title: 'Room Types',
              link: 'reservation/roomtype',
              permission:'FrontOffice:Master:RoomTypes',
              img:'../../../assets/images/manage-roomtype.png',
              display: true
            },
            {
              title: 'Customer Types',
              permission:'FrontOffice:Master:CustomerTypes',
              link: 'reservation/customertypes',
              img:'../../../assets/images/customer-type.png',
              display: true
            },
            {
              title: 'Reservation Type',
              permission:'FrontOffice:Master:ReservationType',
              link: 'reservation/reservationtype',
              img:'../../../assets/images/reservation.png',
              display: true
            },
            {
              title: 'Rooms Setup',
              permission:'FrontOffice:Master:RoomsSetup',
              link: 'reservation/room',
              img:'../../../assets/images/room-setup.png',
              display: true
            },
          ]
        },
      ],
    }, 
    // {
    //   title: 'POS',
    //   img:'../../../assets/images/pos1.svg',
    //   permission:'POS',
    //   group: true,
    //   show: false
     
    // }, 
    {
      title: 'POS',
      img:'../../../assets/images/pos.png',
      icon: 'fa fa-shopping-cart-outline',
      permission:'POS',
      show: false,
      children: [
        {
          title: 'Order',
          img:'../../../assets/images/order.png',
          permission:'POS:Order',
          home: true,
          show: false,
          children: [
            {
              title: 'New Order',
              img:'../../../assets/images/dish.png',
              link: 'pos-dashboard/tables',
              permission:'POS:Order:NewOrder',
              display: true
            },
            {
              title: 'Order Ticket',
              img:'../../../assets/images/dish.png',
              link: 'order-ticket',
              permission:'POS:Order:OrderTicket',
              display: true
            },
            {
              title: 'Void Order',
              img:'../../../assets/images/dish.png',
              link: 'void-order',
              permission:'POS:Order:VoidOrder',
              display: true
            },
            {
              title: 'Table Move',
              img:'../../../assets/images/dish.png',
              link: 'table-move',
              permission:'POS:Order:TableMove',
              display: true
            },
            {
              title: 'Full Merge',
              img:'../../../assets/images/category.png',
              link: 'full-merge',
              permission:'POS:Order:FullMerge',
              display: true
            },
            {
              title: 'Partial Merge',
              img:'../../../assets/images/consumption.png',
              link: 'partial-merge',
              permission:'POS:Order:PartialMerge',
              display: true
            },
            {
              title: 'Split Order',
              link: 'split-order',
              img:'../../../assets/images/menu.png',
              permission:'POS:Order:SplitOrder',
              display: true
            },
            {
              title: 'Settle Bill',
              link: 'split-order',
              img:'../../../assets/images/menu.png',
              permission:'POS:Order:SettleBill',
              display: false
            },
            {
              title: 'Increment Quantity',
              link: 'split-order',
              img:'../../../assets/images/menu.png',
              permission:'POS:Order:IncrementQuantity',
              display: false
            },
            {
              title: 'Decrement Quantity',
              link: 'split-order',
              img:'../../../assets/images/menu.png',
              permission:'POS:Order:DecrementQuantity',
              display: false
            },
            {
              title: 'Void Item',
              link: 'split-order',
              img:'../../../assets/images/menu.png',
              permission:'POS:Order:VoidItem',
              display: false
            },
            {
              title: 'Cancel Item',
              link: 'split-order',
              img:'../../../assets/images/menu.png',
              permission:'POS:Order:CancelItem',
              display: false
            },
            
          ],
        },
        {
          title: 'Notification',
          img:'../../../assets/images/notification.png',
          link: 'pos-dashboard/table/kitchen-order',
          permission:'POS:Notification',
          show: false,
        },
        {
          title: 'Customer',
          img:'../../../assets/images/customer.png',
          link: 'pos-dashboard/customers',
          permission:'POS:Customer',
          show: false,
        },
        {
          title: 'Report',
          img:'../../../assets/images/report.png',
          link: 'pos-dashboard/table/posbilling',
          permission:'POS:Report',
          show: false,
        },
        {
          title: 'Menu Setup',
          img:'../../../assets/images/menu.png',
          icon: 'layout-outline',
          permission:'POS:MenuSetup',
          show: false,
          children: [
            {
              title: 'Menu Price',
              img:'../../../assets/images/dish.png',
              link: 'pos-dashboard/table/menu-price',
              permission:'POS:MenuSetup:MenuPrice',
              display: true
            },
            {
              title: 'Item',
              img:'../../../assets/images/dish.png',
              link: 'pos-dashboard/table/items',
              permission:'POS:MenuSetup:Item',
              display: true
            },
            {
              title: 'Category',
              img:'../../../assets/images/category.png',
              link: 'pos-dashboard/table/category',
              permission:'POS:MenuSetup:Category',
              display: true
            },
            {
              title: 'Consumption',
              img:'../../../assets/images/consumption.png',

              link: 'pos-dashboard/table/menuconsumption',
              permission:'POS:MenuSetup:Consumption',
              display: true
            },
            {
              title: 'Menu Configure',
              link: 'pos-dashboard/table/menu',
              img:'../../../assets/images/menu.png',
              permission:'POS:MenuSetup:MenuConfigure',
              display: true
            },
            {
              title: 'Table/Room Setup',
              pathMatch: 'prefix',
              link: 'pos-dashboard/table/table',
              img:'../../../assets/images/table.png',
              permission:'POS:MenuSetup:TableRoomSetup',
              display: true
            },
          ],
        },
      ],    
    },
    {
      title: 'Account',
      permission:'Account',
      group: true,
      img:'../../../assets/images/accounts.png',
      children: [
        {
          title: 'Transaction',
          permission:'Account:Transaction',
          img:'../../../assets/images/transaction-main.png',
          children: [
            {
              title: 'Journal',
              permission:'Account:Transaction:Journal',
              link: 'Account/journalVoucher',
              img:'../../../assets/images/journal.png',
              display: true
            },
            {
              title: 'Purchase',
              permission:'Account:Transaction:Purchase',
              link: 'Account/purchase',
              img:'../../../assets/images/purchase.png',
              display: true
            },
            {
              title: 'Sales',
              permission:'Account:Transaction:Sales',
              link: 'Account/sales',
              img:'../../../assets/images/sales-main.png',
              display: true
            },
            {
              title: 'Receipt',
              permission:'Account:Transaction:Receipt',
              link: 'Account/receipt',
              img:'../../../assets/images/Receipt.png',
              display: true
            },
            {
              title: 'Payment',
              permission:'Account:Transaction:Payment',
              link: 'Account/payment',
              img:'../../../assets/images/payment.png',
              display: true
            },
            {
              title: 'Bank/Cash',
              permission:'Account:Transaction:BankCash',
              link: 'Account/contra',
              img:'../../../assets/images/Bank.png',
              display: true
            },
            {
              title: 'Credit Note',
              permission:'Account:Transaction:CreditNote',
              link: 'Account/credit-note',
              img:'../../../assets/images/salesReturn.png',
              display: true
            },  
            {
              title: 'Debit Note',
              permission:'Account:Transaction:DebitNote',
              link: 'Account/debit-note',
              img:'../../../assets/images/PurchaseReturn.png',
              display: true
            },
          ],
        },
        {
          title: 'Report',
          permission:'Account:Report',
          img:'../../../assets/images/report.png',
          children: [
            {
              title: 'Day Book',
              link: 'Account/journalVoucher',
              permission:'Account:Report:DayBook',
              img:'../../../assets/images/day-book.png',
              display: true
            },
            {
              title: 'Ledger',
              link: 'Account/accountLedgerView',
              permission:'Account:Report:Ledger',
              img:'../../../assets/images/ledger.png',
              display: true
            },
            {
              title: 'Trial Balance',
              link: 'Account/TrialBalance',
              permission:'Account:Report:TrialBalance',
              img:'../../../assets/images/trial-balance.png',
              display: true
            },
            {
              title: 'Cash Flow',
              link: 'Account/SaleBook',
              permission:'Account:Report:CashFlow',
              img:'../../../assets/images/cash-flow.png',
              display: true
            },
            {
              title: 'Fund Flow',
              link: 'Account/SaleBook',
              permission:'Account:Report:FundFlow',
              img:'../../../assets/images/fund-flow.png',
              display: true
            },
            {
              title: 'Profit & Loss',
              link: 'Account/ProfitLoss',
              permission:'Account:Report:ProfitLoss',
              img:'../../../assets/images/profit-loss.png',
              display: true
            },
            {
              title: 'Balance Sheet',
              link: 'Account/BalanceSheet',
              permission:'Account:Report:BalanceSheet',
              img:'../../../assets/images/BalanceSheet.png',
              display: true
            },
            {
              title: 'Sales Book',
              link: 'Account/SaleBook',
              permission:'Account:Report:SalesBook',
              img:'../../../assets/images/sales-main.png',
              display: true
            },
            {
              title: 'Sales Item Wise',
              link: 'Account/SaleItemWise',
              permission:'Account:Report:SalesItemWise',
              img:'../../../assets/images/sales-main.png',
              display: true
            },
            {
              title: 'Sales Date Wise',
              link: 'Account/SaleDateWise',
              permission:'Account:Report:SalesDateWise',
              img:'../../../assets/images/sales-date-wise.png',
              display: true
            },
            {
              title: 'Sales Customer Wise',
              link: 'Account/SaleCustomerWise',
              permission:'Account:Report:SalesCustomerWise',
              img:'../../../assets/images/sales-main.png',
              display: true
            },
            {
              title: 'Purchase Book',
              link: 'Account/PurchaseBook',
              permission:'Account:Report:PurchaseBook',
              img:'../../../assets/images/purchase-book.png',
              display: true
            },
            // {
            //   title: 'Materialized View',
            //   link: 'Account/MaterializedView',
            //   permission:'Account:Report:MaterializedView',
            //   display: true
            // },
            // {
            //   title: 'Bill Return View',
            //   link: 'Account/BillReturnView',
            //   permission:'Account:Report:BillReturnView',
            //   display: true
            // },     
          
          ],
        },
        {
          title: 'Master',
          permission:'Account:Master',
          icon: 'layout-outline',
          img:'../../../assets/images/master.png',
          children: [
            {
              title: 'Ledger',
              permission:'Account:Master:Ledger',
              link: 'Account/ledger',
              img:'../../../assets/images/ledger.png',
              display: true
            },
            {
              title: 'Group Ledger',
              permission:'Account:Master:GroupLedger',
              link: 'Account/accountType',
              img:'../../../assets/images/group-ledger.png',
              display: true
            },
            {
              title: 'Transaction Type',
              link: 'Account/accounttransType',
              permission:'Account:Master:TransactionType',
              img:'../../../assets/images/transaction.png',
              display: true
            },
          ],
        }, 
      ] 
    },
    {
      title: 'Inventory',
      permission:'Inventory',
      img:'../../../assets/images/inventory.png',
      // group: true,
      show: false,
      children: [
        {
          title: 'Transaction',
          permission:'Inventory:Transaction',
          img:'../../../assets/images/inventory.png',
          icon: 'edit-2-outline',
          children: [
            {
              title: 'Receipt',
              link: 'Inventory/inventory-receipt',
              permission: 'Inventory:Transaction:Receipt',
              img:'../../../assets/images/Receipt.png',
              display: true
            },
            {
              title: 'Consumption',
              link: 'Inventory/consumption',
              permission: 'Inventory:Transaction:Consumption',
              img:'../../../assets/images/consumption.png',
              display: true
            },
            {
              title: 'Stock Damage',
              link: 'Inventory/stock-damage',
              permission: 'Inventory:Transaction:StockDamage',
              img: '../../../assets/images/stock1.png',
              display: true
            },
          ],
        },
        {
          title: 'Master',
          icon: 'browser-outline',
          permission:'Inventory:Master',
          img:'../../../assets/images/master.png',
          children: [
            {
              title: 'Item',
              link: 'Inventory/item',
              permission: 'Inventory:Master:Item',
              img:'../../../assets/images/item.png',
              display: true
             
            },
            {
              title: 'Category',
              link: 'Inventory/category',
              permission: 'Inventory:Master:Category',
              img:'../../../assets/images/category-inventory.png',
              display: true
            },
            {
              title: 'Unit Type',
              link: 'Inventory/unittype',
              permission: 'Inventory:Master:UnitType',
              img:'../../../assets/images/unitType.png',
              display: true
            },      
          ],
        },
        {
          title: 'Report',
          icon: 'keypad-outline',
          permission:'Inventory:Report',
          children: [
            {
              title: 'Stock In Hand',
              link: 'Inventory/stockinhand',
              permission: 'Inventory:Report:StockInHand',
              display: true
            },
          ],
        },
        {
          title: 'Warehouses',
          icon: 'browser-outline',
          permission:'Inventory:Warehouses',
          img:'../../../assets/images/warehouses.png',
          children: [
            {
              title: 'Warehouse',
              link: 'Inventory/WareHouse',
              permission: 'Inventory:Warehouses:Warehouse',
              img:'../../../assets/images/warehouse.png',
              display: true
            },
            {
              title: 'Warehouse Type',
              link: 'Inventory/WareHouseType',
              img:'../../../assets/images/warehouseType.png',
              permission: 'Inventory:Warehouses:WareHouseType',
              display: true
            },
          ],
        },

      ]
    }, 
    
    // {
    //   title: 'User Management',
    //   group: true,
    //   permission:'User Management',
      
    // }, 

    {
      title: 'Manage',
      icon: 'lock-outline',
      img:'../../../assets/images/category.png',
      permission:'Manage',
      children: [
        {
          title: 'User',
          icon: 'lock-outline',
          permission:'Manage:User',
          img:'../../../assets/images/user.png',
          children: [
            // {
            //   title: 'Login',
            //   link: 'login',
            //   permission:'Manage:user:login',
            // },
            {
              title: 'Change Password',
              link: '/managedashboard/change-password',
              permission: 'Manage:User:ChangePassword',
              img:'../../../assets/images/roles.png',
              display: true
            },
            {
              title: 'Users',
              link: '/user',
              permission:'Manage:User:Users',
              img:'../../../assets/images/group.png',
              display: true
            },
            {
              title: 'Roles',
              link: '/managedashboard/role',
              permission: 'Manage:User:Roles',
              img:'../../../assets/images/roles.png',
              display: true
            },
            
            // {
            //   title: 'Role Module',
            //   link: '/managedashboard/rolemodule',
            //   permission:'Manage:User:RoleModule',
            //   img:'../../../assets/images/roleModule.png',
            // },
            // {
            //   title: 'User Roles',
            //   link: '/managedashboard/userRole',
            //   permission:'Manage:User:UserRoles',
            //   img:'../../../assets/images/userRole.png',
            // },
          ],
        },
        {
          title: 'Management',
          icon: 'home-outline',
          permission:'Manage:Management',
          img:'../../../assets/images/management.png',
          children: [
            {
              title: 'Department',
              link: '/managedashboard/department',
              permission: 'Manage:Management:Department',
              img:'../../../assets/images/department.png',
              display: true
            },
            {
              title: 'Table/Room Type',
              link: '/managedashboard/table-room',
              permission: 'Manage:Management:TableRoomType',
              img:'../../../assets/images/manage-roomtype.png',
              display: true
            },
            {
              title: 'Financial Year',
              link: '/managedashboard/financial',
              permission:'Manage:Management:FinancialYear',
              img:'../../../assets/images/financial-year.png',
              display: true
            },
            {
              title: 'Company',
              link: '/managedashboard/company',
              permission: 'Manage:Management:Company',
              img:'../../../assets/images/company.png',
              display: true
            },
            {
              title: 'Printer Setting',
              link: '/managedashboard/printer-setting',
              permission: 'Manage:Management:PrinterSetting',
              img:'../../../assets/images/company.png',
              display: true
            }
          ],
        },      
      ],
    },
  ];