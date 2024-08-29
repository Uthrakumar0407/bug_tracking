   
    /***
     * Events and Event wise payments
     * */
    
    const eventList = ["PAYMENT","CREDIT","TRANSACTION_CAPTURE","TRANSACTION_CANCEL","TRANSACTION_UPDATE","TRANSACTION_REFUND","CHARGEBACK","SUBSCRIPTION_CANCEL","SUBSCRIPTION_UPDATE","SUBSCRIPTION_SUSPEND","SUBSCRIPTION_REACTIVATE","RENEWAL","INSTALMENT","INSTALMENT_CANCEL", "PAYMENT_REMINDER_1", "PAYMENT_REMINDER_2", "SUBMISSION_TO_COLLECTION_AGENCY"];
    
    const paymentPaymentTypes = ["CREDITCARD", "DIRECT_DEBIT_SEPA", "GUARANTEED_DIRECT_DEBIT_SEPA", "INSTALMENT_DIRECT_DEBIT_SEPA", "INVOICE", "GUARANTEED_INVOICE", "INSTALMENT_INVOICE", "PREPAYMENT", "CASHPAYMENT", "ONLINE_BANK_TRANSFER", "GIROPAY", "ONLINE_TRANSFER", "IDEAL", "EPS", "PRZELEWY24", "BANCONTACT", "POSTFINANCE", "POSTFINANCE_CARD", "TRUSTLY", "PAYPAL", "MULTIBANCO", "APPLEPAY", "ALIPAY", "WECHATPAY", "DIRECT_DEBIT_ACH","MBWAY","BLIK","PAYCONIQ","KAKAOPAY", "NAVERPAY","TWINT"];
    const creditPaymentTypes = ["INVOICE_CREDIT", "CASHPAYMENT_CREDIT", "BANK_TRANSFER_BY_END_CUSTOMER", "MULTIBANCO_CREDIT", "ONLINE_TRANSFER_CREDIT", "CREDIT_ENTRY_SEPA", "DEBT_COLLECTION_SEPA", "CREDIT_ENTRY_CREDITCARD", "DEBT_COLLECTION_CREDITCARD", "CREDITCARD_REPRESENTMENT", "CREDIT_ENTRY_DE", "DEBT_COLLECTION_DE", "APPLEPAY_REPRESENTMENT", "GOOGLEPAY_REPRESENTMENT","REFUND_REVERSAL"];
    const refundPaymentTypes = ["CREDITCARD_BOOKBACK", "GUARANTEED_SEPA_BOOKBACK", "GUARANTEED_INVOICE_BOOKBACK", "REFUND_BY_BANK_TRANSFER_EU", "PRZELEWY24_REFUND", "INSTALMENT_INVOICE_BOOKBACK", "INSTALMENT_SEPA_BOOKBACK", "POSTFINANCE_REFUND", "CASHPAYMENT_REFUND", "PAYPAL_BOOKBACK", "TRUSTLY_REFUND", "ALIPAY_REFUND", "WECHATPAY_REFUND", "APPLEPAY_BOOKBACK", "GOOGLEPAY_BOOKBACK","DIRECT_DEBIT_ACH_REFUND","MBWAY_REFUND", "BLIK_REFUND","KAKAOPAY_REFUND","NAVERPAY_REFUND","TWINT_REFUND"];
    const chargebackPaymentTypes = ["CREDITCARD_CHARGEBACK", "RETURN_DEBIT_SEPA", "PAYPAL_CHARGEBACK", "REVERSAL", "APPLEPAY_CHARGEBACK", "GOOGLEPAY_CHARGEBACK","TWINT_CHARGEBACK"];
    const capturePaymentTypes = ["CREDITCARD", "DIRECT_DEBIT_SEPA","APPLEPAY", "PAYPAL", "GOOGLEPAY", "INVOICE", "PREPAYMENT", "GUARANTEED_INVOICE", "GUARANTEED_DIRECT_DEBIT_SEPA", "INSTALMENT_INVOICE", "INSTALMENT_DIRECT_DEBIT_SEPA"];
    const cancelPaymentTypes = ["CREDITCARD", "DIRECT_DEBIT_SEPA", "APPLEPAY", "PAYPAL", "GOOGLEPAY", "INVOICE", "PREPAYMENT", "GUARANTEED_INVOICE", "GUARANTEED_DIRECT_DEBIT_SEPA", "INSTALMENT_INVOICE", "INSTALMENT_DIRECT_DEBIT_SEPA", "PRZELEWY24", "POSTFINANCE", "POSTFINANCE_CARD", "TRUSTLY"];
    const updatePaymentTypes = ["CREDITCARD", "DIRECT_DEBIT_SEPA", "GUARANTEED_DIRECT_DEBIT_SEPA", "INSTALMENT_DIRECT_DEBIT_SEPA", "INVOICE", "GUARANTEED_INVOICE", "INSTALMENT_INVOICE", "PREPAYMENT", "CASHPAYMENT", "ONLINE_BANK_TRANSFER", "GIROPAY", "ONLINE_TRANSFER", "IDEAL", "EPS", "PRZELEWY24", "BANCONTACT", "POSTFINANCE", "POSTFINANCE_CARD", "TRUSTLY", "PAYPAL", "MULTIBANCO", "APPLEPAY", "ALIPAY", "WECHATPAY", "GOOGLEPAY"];
    const instalmentPaymentTypes = ["INSTALMENT_DIRECT_DEBIT_SEPA", "INSTALMENT_INVOICE"];
    const subscriptionPaymentTypes = ["CREDITCARD", "DIRECT_DEBIT_SEPA", "APPLEPAY", "PAYPAL", "GOOGLEPAY", "INVOICE", "PREPAYMENT", "GUARANTEED_INVOICE", "GUARANTEED_DIRECT_DEBIT_SEPA","DIRECT_DEBIT_ACH"];
    const paymentReminderPaymentTypes = ["CREDITCARD", "DIRECT_DEBIT_SEPA", "APPLEPAY", "PAYPAL", "GOOGLEPAY", "REVERSAL", "INVOICE", "GUARANTEED_INVOICE", "GUARANTEED_DIRECT_DEBIT_SEPA", "INSTALMENT_INVOICE", "INSTALMENT_DIRECT_DEBIT_SEPA"];
    const collectionPaymentTypes = ["CREDITCARD", "DIRECT_DEBIT_SEPA", "APPLEPAY", "PAYPAL", "GOOGLEPAY", "REVERSAL", "INVOICE","GUARANTEED_INVOICE", "GUARANTEED_DIRECT_DEBIT_SEPA", "INSTALMENT_INVOICE", "INSTALMENT_DIRECT_DEBIT_SEPA" ];

    const eventFollowUpPaymentTypes = new Map();
    eventFollowUpPaymentTypes.set('PAYMENT',paymentPaymentTypes);
    eventFollowUpPaymentTypes.set('CREDIT',creditPaymentTypes);
    eventFollowUpPaymentTypes.set('TRANSACTION_CAPTURE',capturePaymentTypes);
    eventFollowUpPaymentTypes.set('TRANSACTION_CANCEL',cancelPaymentTypes);
    eventFollowUpPaymentTypes.set('TRANSACTION_UPDATE',updatePaymentTypes);
    eventFollowUpPaymentTypes.set('TRANSACTION_REFUND',refundPaymentTypes);
    eventFollowUpPaymentTypes.set('CHARGEBACK',chargebackPaymentTypes);
    eventFollowUpPaymentTypes.set('SUBSCRIPTION_CANCEL',subscriptionPaymentTypes);
    eventFollowUpPaymentTypes.set('SUBSCRIPTION_UPDATE',subscriptionPaymentTypes);
    eventFollowUpPaymentTypes.set('SUBSCRIPTION_SUSPEND',subscriptionPaymentTypes);
    eventFollowUpPaymentTypes.set('SUBSCRIPTION_REACTIVATE',subscriptionPaymentTypes);
    eventFollowUpPaymentTypes.set('RENEWAL',subscriptionPaymentTypes);
    eventFollowUpPaymentTypes.set('INSTALMENT',instalmentPaymentTypes);
    eventFollowUpPaymentTypes.set('INSTALMENT_CANCEL',instalmentPaymentTypes);
    eventFollowUpPaymentTypes.set('PAYMENT_REMINDER_1',paymentReminderPaymentTypes);
    eventFollowUpPaymentTypes.set('PAYMENT_REMINDER_2',paymentReminderPaymentTypes);
    eventFollowUpPaymentTypes.set('SUBMISSION_TO_COLLECTION_AGENCY',collectionPaymentTypes);
    
    
    
    
     /**
     * Payments supported for each individual payments
     */
             
    const creditCardPaymentTypes = ["CREDITCARD", "CREDITCARD_CHARGEBACK", "CREDITCARD_BOOKBACK", "CREDIT_ENTRY_CREDITCARD", "DEBT_COLLECTION_CREDITCARD","CREDITCARD_REPRESENTMENT","BANK_TRANSFER_BY_END_CUSTOMER"];
    const directDebitSepaPaymentTypes = ["DIRECT_DEBIT_SEPA", "RETURN_DEBIT_SEPA", "REFUND_BY_BANK_TRANSFER_EU", "CREDIT_ENTRY_SEPA", "DEBT_COLLECTION_SEPA", "BANK_TRANSFER_BY_END_CUSTOMER","REFUND_REVERSAL"];
    const invoicePaymentTypes = ["INVOICE", "INVOICE_CREDIT", "REFUND_BY_BANK_TRANSFER_EU", "BANK_TRANSFER_BY_END_CUSTOMER", "DEBT_COLLECTION_DE","REFUND_REVERSAL"];
    const prepaymentPaymentTypes = ["PREPAYMENT", "INVOICE_CREDIT", "REFUND_BY_BANK_TRANSFER_EU", "BANK_TRANSFER_BY_END_CUSTOMER", "DEBT_COLLECTION_DE","REFUND_REVERSAL"];
    const multibancoPaymentTypes = ["MULTIBANCO", "MULTIBANCO_CREDIT"];
    const payPalPaymentTypes = ["PAYPAL", "PAYPAL_BOOKBACK", "PAYPAL_CHARGEBACK", "BANK_TRANSFER_BY_END_CUSTOMER", "CREDIT_ENTRY_DE"];
    const onlineTransferPaymentTypes = ["ONLINE_TRANSFER", "REFUND_BY_BANK_TRANSFER_EU", "ONLINE_TRANSFER_CREDIT", "REVERSAL", "DEBT_COLLECTION_DE", "BANK_TRANSFER_BY_END_CUSTOMER","REFUND_REVERSAL"];
    const onlineBankTransferPaymentTypes = ["ONLINE_BANK_TRANSFER", "REFUND_BY_BANK_TRANSFER_EU", "DEBT_COLLECTION_DE", "REVERSAL", "ONLINE_TRANSFER_CREDIT","REFUND_REVERSAL"];
    const bancontactPaymentTypes = ["BANCONTACT", "REFUND_BY_BANK_TRANSFER_EU","REFUND_REVERSAL"];
    const idealPaymentTypes = ["IDEAL", "REFUND_BY_BANK_TRANSFER_EU", "BANK_TRANSFER_BY_END_CUSTOMER", "REVERSAL", "DEBT_COLLECTION_DE", "ONLINE_TRANSFER_CREDIT","REFUND_REVERSAL"];
    const epsPaymentTypes = ["EPS", "REFUND_BY_BANK_TRANSFER_EU", "CREDIT_ENTRY_DE", "REVERSAL", "DEBT_COLLECTION_DE", "ONLINE_TRANSFER_CREDIT","REFUND_REVERSAL"];
    const giropayPaymentTypes = ["GIROPAY", "REFUND_BY_BANK_TRANSFER_EU", "ONLINE_TRANSFER_CREDIT","REFUND_REVERSAL"];
    const przelewy24PaymentTypes = ["PRZELEWY24", "PRZELEWY24_REFUND"];
    const cashpaymentPaymentTypes = ["CASHPAYMENT", "CASHPAYMENT_REFUND", "CASHPAYMENT_CREDIT"];
    const postFinancePaymentTypes = ["POSTFINANCE", "POSTFINANCE_REFUND"];
    const postFinanceCardPaymentTypes = ["POSTFINANCE_CARD", "POSTFINANCE_REFUND"];
    const guaranteedInvoicePaymentTypes = ["GUARANTEED_INVOICE", "GUARANTEED_INVOICE_BOOKBACK","BANK_TRANSFER_BY_END_CUSTOMER","REFUND_REVERSAL"];
    const guaranteedDirectDebitSepaPaymentTypes = ["GUARANTEED_DIRECT_DEBIT_SEPA", "GUARANTEED_SEPA_BOOKBACK","REFUND_REVERSAL"];
    const instalmentInvoicePaymentTypes = ["INSTALMENT_INVOICE", "INSTALMENT_INVOICE_BOOKBACK","BANK_TRANSFER_BY_END_CUSTOMER","REFUND_REVERSAL"];
    const instalmentDirectDebitSepaPaymentTypes = ["INSTALMENT_DIRECT_DEBIT_SEPA", "INSTALMENT_SEPA_BOOKBACK","REFUND_REVERSAL"];
    const applepayPaymentTypes = ["APPLEPAY", "APPLEPAY_REPRESENTMENT", "APPLEPAY_BOOKBACK", "APPLEPAY_CHARGEBACK"];
    const googlepayPaymentTypes = ["GOOGLEPAY", "GOOGLEPAY_REPRESENTMENT", "GOOGLEPAY_BOOKBACK", "GOOGLEPAY_CHARGEBACK"];
    const alipayPaymentTypes = ["ALIPAY", "ALIPAY_REFUND"];
    const wechatpayPaymentTypes = ["WECHATPAY", "WECHATPAY_REFUND"];
    const trustlyPaymentTypes = ["TRUSTLY", "ONLINE_TRANSFER_CREDIT", "DEBT_COLLECTION_DE", "TRUSTLY_REFUND", "REVERSAL"];
    const directDebitACHPaymentTypes = ["DIRECT_DEBIT_ACH", "DIRECT_DEBIT_ACH_REFUND"];
    const mbwayPaymentTypes = ["MBWAY", "MBWAY_REFUND", "DEBT_COLLECTION_DE", "TRUSTLY_REFUND", "REVERSAL"];
    const payconiqPaymentTypes = ["PAYCONIQ", "REFUND_BY_BANK_TRANSFER_EU","REFUND_REVERSAL"];
    const blikPaymentTypes = ["BLIK", "BLIK_REFUND"];
    const kakaoPayPaymentTypes = ["KAKAOPAY", "KAKAOPAY_REFUND"];
    const naverPayPaymentTypes = ["NAVERPAY", "NAVERPAY_REFUND"];
    const twintPaymentTypes = ["TWINT", "TWINT_REFUND","TWINT_CHARGEBACK"];



    
    const individualPaymentTypes = new Map();
    
    individualPaymentTypes.set("CREDITCARD", creditCardPaymentTypes);
    individualPaymentTypes.set("DIRECT_DEBIT_SEPA", directDebitSepaPaymentTypes);
    individualPaymentTypes.set("INVOICE", invoicePaymentTypes);
    individualPaymentTypes.set("PREPAYMENT", prepaymentPaymentTypes);
    individualPaymentTypes.set("MULTIBANCO", multibancoPaymentTypes);
    individualPaymentTypes.set("PAYPAL", payPalPaymentTypes);
    individualPaymentTypes.set("ONLINE_TRANSFER", onlineTransferPaymentTypes);
    individualPaymentTypes.set("ONLINE_BANK_TRANSFER", onlineBankTransferPaymentTypes);
    individualPaymentTypes.set("BANCONTACT", bancontactPaymentTypes);
    individualPaymentTypes.set("IDEAL", idealPaymentTypes);
    individualPaymentTypes.set("EPS", epsPaymentTypes);
    individualPaymentTypes.set("GIROPAY", giropayPaymentTypes);
    individualPaymentTypes.set("PRZELEWY24", przelewy24PaymentTypes);
    individualPaymentTypes.set("CASHPAYMENT", cashpaymentPaymentTypes);
    individualPaymentTypes.set("POSTFINANCE", postFinancePaymentTypes);
    individualPaymentTypes.set("POSTFINANCE_CARD", postFinanceCardPaymentTypes);
    individualPaymentTypes.set("GUARANTEED_INVOICE", guaranteedInvoicePaymentTypes);
    individualPaymentTypes.set("GUARANTEED_DIRECT_DEBIT_SEPA", guaranteedDirectDebitSepaPaymentTypes);
    individualPaymentTypes.set("INSTALMENT_INVOICE", instalmentInvoicePaymentTypes);
    individualPaymentTypes.set("INSTALMENT_DIRECT_DEBIT_SEPA", instalmentDirectDebitSepaPaymentTypes);
    individualPaymentTypes.set("APPLEPAY", applepayPaymentTypes);
    individualPaymentTypes.set("GOOGLEPAY", googlepayPaymentTypes);
    individualPaymentTypes.set("ALIPAY", alipayPaymentTypes);
    individualPaymentTypes.set("WECHATPAY", wechatpayPaymentTypes);
    individualPaymentTypes.set("TRUSTLY", trustlyPaymentTypes);
    individualPaymentTypes.set("DIRECT_DEBIT_ACH", directDebitACHPaymentTypes);
    individualPaymentTypes.set("MBWAY", mbwayPaymentTypes);
    individualPaymentTypes.set("BLIK", blikPaymentTypes);
    individualPaymentTypes.set("PAYCONIQ", payconiqPaymentTypes);
    individualPaymentTypes.set("KAKAOPAY", kakaoPayPaymentTypes);
    individualPaymentTypes.set("NAVERPAY", naverPayPaymentTypes);
    individualPaymentTypes.set("TWINT", twintPaymentTypes);
    
    
    
    
    //get transaction details request data
    const proxy = "proxy.php?url=";
    const URL = "https://payport.novalnet.de/v2/transaction/details";
    const getRequestData = (tidValue) =>{
        const data = {
                transaction : {
                    tid : tidValue
                },
                custom : {
                    lang : "EN"
                }
            };
            return data;
    }
    
    //Form elements for validation    
    const formEle = document.getElementById('callbackrequest');
    const callbackUrlEle = document.getElementById('url');
    const tidEle = document.getElementById('tid');
    const submitBtnEle = document.getElementById('sendReq');
    const dropdownContainer = document.getElementById('events');
    const eventDropdownEle = document.getElementById('eventType');
    //Creating Event dropdown
    for(let i=0;i<eventList.length;i++){
        const option = document.createElement("option");
        option.text = eventList[i];
        option.value = eventList[i];
        eventDropdownEle.add(option);
        }
     
    //selected event    
    var selectedEventValue ;

    //event dropdown listener
    eventDropdownEle.addEventListener("change", function(){      
        
        //remove border error
        selectedEventValue = this.value;
        if(selectedEventValue != ''){
            if(eventDropdownEle.hasAttribute('class'))
                eventDropdownEle.classList.remove('red-border');
        }
         
        removeField("paymentType");
        createPaymentTypeDropdownByEventType(selectedEventValue);     
        removeField("amount");
        removeField("instalmentCyclesCount");
        removeField("instalmentCyclesExecuted");
        removeField("instalmentNextCycleDate");
        removeField("instalmentPendingCycles");
        removeField("resultStatus");
        removeField("transactionStatus");
        removeField("updateType");
        removeField("updateTypeStatus");
        removeField("updateAmount");
        removeField("updateDueDate");
        removeField("subsUpdateType");
        removeField("subsReactivateType");
        removeField("subsAmount");
        removeField("subsNextCycleDate");
        removeField("subsChangePayment");
        removeField("instalmentCancelType");   
        removeField("prepaidType");         
        
        if(selectedEventValue === 'CREDIT' || selectedEventValue === 'TRANSACTION_REFUND' || selectedEventValue === 'CHARGEBACK'){
            createAmountInputField();
        }else if(selectedEventValue === 'TRANSACTION_UPDATE'){
            createUpdateTypeDropdown();
        }else if(selectedEventValue === 'PAYMENT'){
            createResultStatusDropdown();
            createTransactionStatusDropdown();
            createAmountInputField();
        }else if(selectedEventValue === 'INSTALMENT'){
            createCyclesExecutedField();
            createNextCycleDateField();
            createPendingCyclesField();
            createPrepaidDropdown();
        }else if(selectedEventValue === 'SUBSCRIPTION_UPDATE'){
            createSubscriptionUpdateDropdown();
         } else if(selectedEventValue === 'SUBSCRIPTION_REACTIVATE'){
            createSubscriptionReactivateTypeDropdown();
        }else if(selectedEventValue === 'RENEWAL'){
            createSubsNextCycleDateField();
        }else if(selectedEventValue === 'INSTALMENT_CANCEL'){
            createInstalmentCancelTypeDropdown();
        }
    
     });
     
     // Create payment type dropdown
     function createPaymentTypeDropdownByEventType(selectedValue){
        const paymentTypeDropdownDiv = document.getElementById('paymentTypeDiv');
        const paymentTypeLabel = document.createElement('label');
        paymentTypeLabel.setAttribute('for','paymentType');
        paymentTypeLabel.textContent = "Payment type: ";
        paymentTypeDropdown = document.createElement('select');
        paymentTypeDropdown.setAttribute('id','paymentType');
        paymentTypeDropdown.setAttribute('name','paymentType');
        let selectOption = document.createElement("option");
        selectOption.text="Select a payment";
        selectOption.value="";
        paymentTypeDropdown.add(selectOption);
        for(let [key, value] of eventFollowUpPaymentTypes.entries()){
            if(selectedValue === key){
                const paymentTypes = value;
                for(let i=0;i<paymentTypes.length;i++){
                    const option = document.createElement('option');
                    option.text = paymentTypes[i];
                    option.value = paymentTypes[i];
                    paymentTypeDropdown.add(option);
                }
                paymentTypeDropdownDiv.appendChild(paymentTypeLabel);
                paymentTypeDropdownDiv.appendChild(paymentTypeDropdown);
            }
        }
     }

    //payment type dropdown event listener
    const paymentTypeDropdownDiv = document.getElementById('paymentTypeDiv');
    paymentTypeDropdownDiv.addEventListener('change',function(evt){
        if(evt.target.tagName === 'SELECT') {
            removeField("instalmentCyclesCount");
            const paymentTypeDd = evt.target;
            if(paymentTypeDd.value != ''){                   
                if(paymentTypeDd.hasAttribute('class'))
                paymentTypeDd.classList.remove('red-border');
            }
            if((selectedEventValue === 'TRANSACTION_CAPTURE' || selectedEventValue === 'TRANSACTION_UPDATE') && 
            (paymentTypeDd.value === 'INSTALMENT_INVOICE' || paymentTypeDd.value === 'INSTALMENT_DIRECT_DEBIT_SEPA')){
                createNumberOfCyclesField();
            }
        }                             
    });
                       
    
    // Submit the form
    function submitForm(e){
        e.preventDefault();
        disableSubmitBtn();
        removeError();
        
        removeRedBorder("url");
        removeRedBorder("tid");
        removeRedBorder("amount");
        removeRedBorder("subsAmount");
        removeRedBorder("updateAmount");
        removeRedBorder("instalmentCyclesCount");
        removeRedBorder("instalmentCyclesExecuted");
        removeRedBorder("instalmentPendingCycles");
        removeRedBorder("instalmentNextCycleDate");
        removeRedBorder("subsNextCycleDate");
        removeRedBorder("updateDueDate");
        
        
        var flag = true;
        var errorMessage = "</br>";
        
        //validate callback url
        const callbackURL = callbackUrlEle.value.trim();
        if(!validateURL(callbackURL)){
            changeBorderToRed(callbackUrlEle);
            errorMessage += "Invalid callback URL</br>";
            flag = false;
        }
        //validate event
        const selectedEvent = eventDropdownEle.options[eventDropdownEle.selectedIndex];
        if(changeDropdownBorderToRed(eventDropdownEle,selectedEvent)){
            errorMessage += "Select an event type</br>";
            flag = false;
        }
        
        //validate payment type
        if(document.getElementById('paymentType')){
            const paymentTypeDropdown = document.getElementById('paymentType');
            var paymentType = paymentTypeDropdown.options[paymentTypeDropdown.selectedIndex];
            if(changeDropdownBorderToRed(paymentTypeDropdown,paymentType)){
                errorMessage += "Select a payment type</br>";
                flag = false;
            }
        }
        
        //validate tid
        const tidValue = tidEle.value.trim();
        if(!validateTID(tidValue)){
            changeBorderToRed(tidEle);
            errorMessage += "Invalid TID</br>";
            flag = false;
        }
        
        //validate amount
        if(document.getElementById('amount')){
            var amount = document.getElementById('amount').value;
            if(!validateAmount(amount)){
            changeBorderToRed(document.getElementById('amount'));
            errorMessage += "Invalid amount value</br>";
            flag = false;
            }
        }
        
         //validate subs amount
        if(document.getElementById('subsAmount')){
            var amount = document.getElementById('subsAmount').value;
            if(!validateInputContainsNumber(amount)){
                changeBorderToRed(document.getElementById('subsAmount'));
                errorMessage += "Invalid amount value</br>";
                flag = false;
            }
        }
        
        //validate update amount       
        if(document.getElementById('updateAmount')){
            var amount = document.getElementById('updateAmount').value;
            if(!validateInputContainsNumber(amount)){
                changeBorderToRed(document.getElementById('updateAmount'));
                errorMessage += "Invalid amount value</br>";
                flag = false;
            }
        }
        
        //instalment cycle count
        if(document.getElementById('instalmentCyclesCount')){
            var cycleCount = document.getElementById('instalmentCyclesCount').value;
            if(!validateInstalmentCycleCount(cycleCount)){
                changeBorderToRed(document.getElementById('instalmentCyclesCount'));
                errorMessage += "Invalid number of instalment cycle count minimum 2</br>";
                flag = false;
            }
        }
            
        //instalment cycles executed
        if(document.getElementById('instalmentCyclesExecuted')){
            var cycleExecuted = document.getElementById('instalmentCyclesExecuted').value;
            if(!validateInputAcceptsFromOne(cycleExecuted)){
                changeBorderToRed(document.getElementById('instalmentCyclesExecuted'));
                errorMessage += "Invalid value instalment cycle executed minimum 1</br>";
                flag = false;
            }
        }
        //instalment pending cycles
        if(document.getElementById('instalmentPendingCycles')){
            var pendingCycles = document.getElementById('instalmentPendingCycles').value;
            if(!validateInputContainsNumber(pendingCycles)){
                changeBorderToRed(document.getElementById('instalmentPendingCycles'));
                errorMessage += "Invalid value instalment cycle pending minimum 0</br>";
                flag = false;
            }
        }
        
        //validate subs next cycle date       
        if(document.getElementById('subsNextCycleDate')){
            var date = document.getElementById('subsNextCycleDate').value;
            if(!validateNextCycleDate(date)){
                changeBorderToRed(document.getElementById('subsNextCycleDate'));
                errorMessage += "Invalid next cycle date value</br>";
                flag = false;
            }
        }
        
        //validate update due date       
        if(document.getElementById('updateDueDate')){
            var dueDate = document.getElementById('updateDueDate').value;
            if(!validateDueDate(dueDate)){
                changeBorderToRed(document.getElementById('updateDueDate'));
                errorMessage += "Invalid due date value</br>";
                flag = false;
            }
        }
        
        if(!flag){
            displayError(errorMessage);
            return;
        }
        
        const formData = new FormData(formEle);
        const formDataObj = {};
        formData.forEach((value,key) => {
            formDataObj[key] = value;
        });

             
        //removeTextArea();
        removeResponse();
        //removeReRunBtn();
        
        //get the original TID details
        getData(proxy+URL,getRequestData(formDataObj.tid),formDataObj.accessKeyVal)
        .then(data =>{
            
                if(!verifyTIDStatusCodeValid(data)){
                    if(data.result.status_code === 1007){
                        displayError(" Invalid TID or Invalid vendor ID. </br>"+data.result.status_text);
                        return;
                    }
                    displayError(data.result.status_text+" -> "+data.result.status_code);
                    return;
                }
                
                //TID payment is different from selected paymentType
                if(!verifyEventTypeWithPaymentTypeOfTID(formDataObj,data)){
                    displayError("Invalid payment type for this tid");
                    return;
                }
                
                //If subscription event selected but tid is not subscription
                if(!verifySubscriptionEventAgainstTID(formDataObj,data)){
                    displayError("Invalid tid for subscription");
                    return;
                }
                           
                const updatedData = formCallbackData(formDataObj,data);
                
                createChecksum2(updatedData)
                .then(checksumResponse => {
                        updatedData['event']['checksum'] = checksumResponse.checksum;
                                const prettyJson = JSON.stringify(updatedData,null,4);
                                document.getElementById('callbackRequestJson').value = prettyJson;
                                //createTextArea(prettyJson);
                                //createReRunBtn();
                                enableSubmitBtn();
                 }).catch(error =>{
                    enableSubmitBtn();
                    console.log("Unexpected error happened during checksum creation "+error);
                    alert("Error happened during checksum creation "+error);
                });
        }).catch(error =>{
                enableSubmitBtn();
                console.log("Unexpected error happened during API request "+error);
            });
        }
        
        function createAmountInputField(){
            const amountDiv = document.getElementById('amountDiv');
            const amountEle = document.createElement('input');
            amountEle.setAttribute('id','amount');
            amountEle.setAttribute('name','amount');
            amountEle.setAttribute('placeholder','Enter the amount in cents(e.g. for 10.50 Euro, enter 1050)');
            const amountLabel = document.createElement('label');
            amountLabel.setAttribute('for','amount');
            amountLabel.textContent = "Amount: ";
            amountDiv.appendChild(amountLabel);
            amountDiv.appendChild(amountEle);
        }
        
        function createNumberOfCyclesField(){
            const instalmentDiv = document.getElementById('instalmentDiv');
            const instalmentEle = document.createElement('input');
            instalmentEle.setAttribute('id','instalmentCyclesCount');
            instalmentEle.setAttribute('name','instalmentCyclesCount');
            instalmentEle.setAttribute('placeholder','Enter the number of cycles selected in the checkout');
            instalmentEle.value = 4;
            const instalmentLabel = document.createElement('label');
            instalmentLabel.setAttribute('for','instalmentCyclesCount');
            instalmentLabel.textContent = "Instalment cycles count: ";
            instalmentDiv.appendChild(instalmentLabel);
            instalmentDiv.appendChild(instalmentEle);
        }
        
        function createCyclesExecutedField(){
            const instalmentDiv = document.getElementById('instalmentDiv');
            const instalmentEle = document.createElement('input');
            instalmentEle.setAttribute('id','instalmentCyclesExecuted');
            instalmentEle.setAttribute('name','instalmentCyclesExecuted');
            instalmentEle.value = 1;
            const instalmentLabel = document.createElement('label');
            instalmentLabel.setAttribute('for','instalmentCyclesExecuted');
            instalmentLabel.textContent = "Instalment cycles executed: ";
            instalmentDiv.appendChild(instalmentLabel);
            instalmentDiv.appendChild(instalmentEle);
        }
        
        function createNextCycleDateField(){
            const instalmentDiv = document.getElementById('instalmentDiv');
            const instalmentEle = document.createElement('input');
            instalmentEle.setAttribute('id','instalmentNextCycleDate');
            instalmentEle.setAttribute('name','instalmentNextCycleDate');
            instalmentEle.setAttribute('placeholder','Date should be in YYYY-MM-DD HH:mm:ss format');
            instalmentEle.value = getNextMonth();
            const instalmentLabel = document.createElement('label');
            instalmentLabel.setAttribute('for','instalmentNextCycleDate');
            instalmentLabel.textContent = "Instalment next cycle date: ";
            instalmentDiv.appendChild(instalmentLabel);
            instalmentDiv.appendChild(instalmentEle);
        }
        
        function createPendingCyclesField(){
            const instalmentDiv = document.getElementById('instalmentDiv');
            const instalmentEle = document.createElement('input');
            instalmentEle.setAttribute('id','instalmentPendingCycles');
            instalmentEle.setAttribute('name','instalmentPendingCycles');
            instalmentEle.value = 3;
            const instalmentLabel = document.createElement('label');
            instalmentLabel.setAttribute('for','instalmentPendingCycles');
            instalmentLabel.textContent = "Instalment pending cycles: ";
            instalmentDiv.appendChild(instalmentLabel);
            instalmentDiv.appendChild(instalmentEle);
        }

        function createPrepaidDropdown(){
            const instalmentDiv = document.getElementById('instalmentDiv');
            const instalmentEle = document.createElement('select');
            instalmentEle.setAttribute('id','prepaidType');
            instalmentEle.setAttribute('name','prepaidType');
            const instalmentLabel = document.createElement('label');
            instalmentLabel.setAttribute('for','prepaidType');
            instalmentLabel.style.marginTop = '10px';
            instalmentLabel.textContent = "Prepaid: ";
            
            const options = ["0","1"];
            for(let i=0;i<options.length;i++){
                const option = document.createElement('option');
                option.text = options[i];
                option.value = options[i];
                instalmentEle.add(option);
            }
            instalmentDiv.appendChild(instalmentLabel);
            instalmentDiv.appendChild(instalmentEle);
        }
        
        function createResultStatusDropdown(){
            const resultStatusDiv = document.getElementById('resultStatusDiv');
            const resultStatusEle = document.createElement('select');
            resultStatusEle.setAttribute('id','resultStatus');
            resultStatusEle.setAttribute('name','resultStatus');
            const resultLabel = document.createElement('label');
            resultLabel.setAttribute('for','resultStatus');
            resultLabel.style.marginTop = '10px';
            resultLabel.textContent = "Result status: ";
            
            const options = ["SUCCESS","FAILURE"];
            for(let i=0;i<options.length;i++){
                const option = document.createElement('option');
                option.text = options[i];
                option.value = options[i];
                resultStatusEle.add(option);
            }
            resultStatusDiv.appendChild(resultLabel);
            resultStatusDiv.appendChild(resultStatusEle);
        }

        function createTransactionStatusDropdown(){
            const resultStatusDiv = document.getElementById('transactionStatusDiv');
            const resultStatusEle = document.createElement('select');
            resultStatusEle.setAttribute('id','transactionStatus');
            resultStatusEle.setAttribute('name','transactionStatus');
            const resultLabel = document.createElement('label');
            resultLabel.setAttribute('for','transactionStatus');
            resultLabel.style.marginTop = '10px';
            resultLabel.textContent = "Transaction status: ";
            
            const options = ["CONFIRMED","ON_HOLD","PENDING"];
            for(let i=0;i<options.length;i++){
                const option = document.createElement('option');
                option.text = options[i];
                option.value = options[i];
                resultStatusEle.add(option);
            }
            resultStatusDiv.appendChild(resultLabel);
            resultStatusDiv.appendChild(resultStatusEle);
        }

        function createInstalmentCancelTypeDropdown(){
            const instalmentCancelTypeDiv = document.getElementById('instalmentCancelTypeDiv');
            const instalmentCancelTypeEle = document.createElement('select');
            instalmentCancelTypeEle.setAttribute('id','instalmentCancelType');
            instalmentCancelTypeEle.setAttribute('name','instalmentCancelType');
            const instalmentCancelTypeLabel = document.createElement('label');
            instalmentCancelTypeLabel.setAttribute('for','instalmentCancelType');
            instalmentCancelTypeLabel.style.marginTop = '10px';
            instalmentCancelTypeLabel.textContent = "Instalment cancel type: ";
            
            const options = ["ALL_CYCLES","REMAINING_CYCLES"];
            for(let i=0;i<options.length;i++){
                const option = document.createElement('option');
                option.text = options[i];
                option.value = options[i];
                instalmentCancelTypeEle.add(option);
            }
            instalmentCancelTypeDiv.appendChild(instalmentCancelTypeLabel);
            instalmentCancelTypeDiv.appendChild(instalmentCancelTypeEle);
        }


        
        function createUpdateAmountInputField(){
            const updateDiv = document.getElementById('updateDiv');
            const amountEle = document.createElement('input');
            amountEle.setAttribute('id','updateAmount');
            amountEle.setAttribute('name','updateAmount');
            amountEle.value = 1000;
            const amountLabel = document.createElement('label');
            amountLabel.setAttribute('for','updateAmount');
            amountLabel.style.marginTop = '10px';
            amountLabel.textContent = "Update amount: ";
            updateDiv.appendChild(amountLabel);
            updateDiv.appendChild(amountEle);
        }
        
        function createUpdateDueDateInputField(){
            const updateDiv = document.getElementById('updateDiv');
            const dueDateEle = document.createElement('input');
            dueDateEle.setAttribute('id','updateDueDate');
            dueDateEle.setAttribute('name','updateDueDate');
            dueDateEle.setAttribute('placeholder','Enter date in YYYY-MM-DD format');
            dueDateEle.value = getTodayDate();
            const dueDateLabel = document.createElement('label');
            dueDateLabel.setAttribute('for','updateDueDate');
            dueDateLabel.style.marginTop = '10px';
            dueDateLabel.textContent = "Update due date: ";
            updateDiv.appendChild(dueDateLabel);
            updateDiv.appendChild(dueDateEle);
        }
        
        
        function createSubscriptionUpdateDropdown(){
            const subscriptionDiv = document.getElementById('subscriptionDiv');
            const updateTypeEle = document.createElement('select');
            updateTypeEle.setAttribute('id','subsUpdateType');
            updateTypeEle.setAttribute('name','subsUpdateType');
            const updateTypeLabel = document.createElement('label');
            updateTypeLabel.setAttribute('for','subsUpdateType');
            updateTypeLabel.style.marginTop = '10px';
            updateTypeLabel.textContent = "Subscription update type: ";
            
            const options = ["RENEWAL_AMOUNT","RENEWAL_DATE","PAYMENT_DATA"];
            for(let i=0;i<options.length;i++){
                const option = document.createElement('option');
                option.text = options[i];
                option.value = options[i];
                updateTypeEle.add(option);
            }
            subscriptionDiv.appendChild(updateTypeLabel);
            subscriptionDiv.appendChild(updateTypeEle);
            
            createSubsUpdateAmountInputField();
            
            updateTypeEle.addEventListener('change',function(){
                removeField("subsAmount");
                removeField("subsNextCycleDate");
                removeField("subsChangePayment");
                const updateType = updateTypeEle.options[updateTypeEle.selectedIndex].text;
                if(updateType === 'RENEWAL_AMOUNT'){
                    createSubsUpdateAmountInputField();
                }else if(updateType === 'RENEWAL_DATE'){
                    createSubsNextCycleDateField();
                }else if(updateType === 'PAYMENT_DATA'){
                    createSubsChangePaymentsDropdown();
                }                
            });
        }

        function createSubscriptionReactivateTypeDropdown(){
            const subscriptionDiv = document.getElementById('subscriptionDiv');
            const updateTypeEle = document.createElement('select');
            updateTypeEle.setAttribute('id','subsReactivateType');
            updateTypeEle.setAttribute('name','subsReactivateType');
            const updateTypeLabel = document.createElement('label');
            updateTypeLabel.setAttribute('for','subsReactivateType');
            updateTypeLabel.style.marginTop = '10px';
            updateTypeLabel.textContent = "Subscription Reactivate type: ";
            
            const options = ["EXPLICIT","CREDIT","PAYMENT_UPDATE"];
            for(let i=0;i<options.length;i++){
                const option = document.createElement('option');
                option.text = options[i];
                option.value = options[i];
                updateTypeEle.add(option);
            }
            subscriptionDiv.appendChild(updateTypeLabel);
            subscriptionDiv.appendChild(updateTypeEle);
        }
        
        function createSubsChangePaymentsDropdown(){
            const subscriptionDiv = document.getElementById('subscriptionDiv');
            const changePaymentEle = document.createElement('select');
            changePaymentEle.setAttribute('id','subsChangePayment');
            changePaymentEle.setAttribute('name','subsChangePayment');
            const changePaymentLabel = document.createElement('label');
            changePaymentLabel.setAttribute('for','subsChangePayment');
            changePaymentLabel.style.marginTop = '10px';
            changePaymentLabel.textContent = "Subscription change payment: ";
            
            const options = ["CREDITCARD","DIRECT_DEBIT_SEPA","INVOICE","PREPAYMENT","PAYPAL","GOOGLEPAY","GUARANTEED_INVOICE","GUARANTEED_DIRECT_DEBIT_SEPA","APPLEPAY","DIRECT_DEBIT_ACH"];
            for(let i=0;i<options.length;i++){
                const option = document.createElement('option');
                option.text = options[i];
                option.value = options[i];
                changePaymentEle.add(option);
            }
            subscriptionDiv.appendChild(changePaymentLabel);
            subscriptionDiv.appendChild(changePaymentEle);
        }
        
        
        function createSubsUpdateAmountInputField(){
            const amountDiv = document.getElementById('subscriptionDiv');
            const amountEle = document.createElement('input');
            amountEle.setAttribute('id','subsAmount');
            amountEle.setAttribute('name','subsAmount');
            amountEle.value = 1000;
            const amountLabel = document.createElement('label');
            amountLabel.setAttribute('for','subsAmount');
            amountLabel.textContent = "Subscription amount: ";
            amountDiv.appendChild(amountLabel);
            amountDiv.appendChild(amountEle);
        }
        
        function createSubsNextCycleDateField(){
            const subscriptionDiv = document.getElementById('subscriptionDiv');
            const subscriptionEle = document.createElement('input');
            subscriptionEle.setAttribute('id','subsNextCycleDate');
            subscriptionEle.setAttribute('name','subsNextCycleDate');
            subscriptionEle.setAttribute('placeholder','Date should be in YYYY-MM-DD HH:mm:ss format');
            subscriptionEle.value = getNextMonth();
            const subscriptionLabel = document.createElement('label');
            subscriptionLabel.setAttribute('for','subsNextCycleDate');
            subscriptionLabel.textContent = "Subscription next cycle date: ";
            subscriptionDiv.appendChild(subscriptionLabel);changeDropdownBorderToRed
            subscriptionDiv.appendChild(subscriptionEle);
        }
        
        
        
        
        function createUpdateTypeDropdown(){
            const updateDiv = document.getElementById('updateDiv');
            const updateTypeEle = document.createElement('select');
            updateTypeEle.setAttribute('id','updateType');
            updateTypeEle.setAttribute('name','updateType');
            const options = ["STATUS","AMOUNT","DUE_DATE","AMOUNT_DUE_DATE"];
            for(let i=0;i<options.length;i++){
                const option = document.createElement('option');
                option.text = options[i];
                option.value = options[i];
                updateTypeEle.add(option);
            }
            const updateLabel = document.createElement('label');
            updateLabel.setAttribute('for','updateType');
            updateLabel.textContent = "Update type: ";
            updateDiv.appendChild(updateLabel);
            updateDiv.appendChild(updateTypeEle);
            
            createUpdateTypeStatusDropdown();
            
            updateTypeEle.addEventListener('change',function(){
                removeField("updateTypeStatus");
                removeField("updateAmount");
                removeField("updateDueDate");
                const updateType = updateTypeEle.options[updateTypeEle.selectedIndex].text;
                if(updateType === 'STATUS'){
                    createUpdateTypeStatusDropdown();
                }else if(updateType === 'AMOUNT'){
                    createUpdateAmountInputField();
                }else if(updateType === 'DUE_DATE'){
                    createUpdateDueDateInputField();
                }else if(updateType === 'AMOUNT_DUE_DATE'){
                    createUpdateAmountInputField();
                    createUpdateDueDateInputField();
                }                
            });
        }
        
        
        function createUpdateTypeStatusDropdown(){
            const updateDiv = document.getElementById('updateDiv');
            const options = ["CONFIRMED","ON_HOLD","DEACTIVATED","PENDING"];
            const updateTypeStatusEle = document.createElement('select');
            updateTypeStatusEle.setAttribute('id','updateTypeStatus');
            updateTypeStatusEle.setAttribute('name','updateTypeStatus');
            for(let i=0;i<options.length;i++){
                const option = document.createElement('option');
                option.text = options[i];
                option.value = options[i];
                updateTypeStatusEle.add(option);
            }
            const updateStatusLabel = document.createElement('label');
            updateStatusLabel.setAttribute('for','updateTypeStatus');
            updateStatusLabel.style.marginTop = '10px';
            updateStatusLabel.textContent = "Update status: ";
            updateDiv.appendChild(updateStatusLabel);
            updateDiv.appendChild(updateTypeStatusEle);
        }
        

        function changeDropdownBorderToRed(dropdown,option){
            if(option.value === ''){
                dropdown.classList.add('red-border');
                enableSubmitBtn();
                return true;
            }else{
                dropdown.classList.remove('red-border');
                return false;
            }
        }
        
        function changeBorderToRed(dropdown){
            dropdown.classList.add('red-border');
            enableSubmitBtn();
        }
        
        function removeRedBorder(elementId){
            if(document.getElementById(`${elementId}`)){
                if(document.getElementById(`${elementId}`).hasAttribute('class')){
                document.getElementById(`${elementId}`).classList.remove('red-border');
                }
            }
        }
        
        
        
        function disableSubmitBtn(){
            submitBtnEle.disabled = true;
            submitBtnEle.value = "Getting wait...";
            submitBtnEle.classList.add('disabled');
        }
        
        function enableSubmitBtn(){
            submitBtnEle.disabled = false;
            submitBtnEle.value = "Get";
            submitBtnEle.classList.remove('disabled');
        }
        

        function validateURL(url){
            const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
            if(urlPattern.test(url)){
                return true;
            }
            return false;
        }

        function validateTID(tid){
            const pattern = /^\d{17}$/;
            if(pattern.test(tid.trim())){
                return true;
            }
            return false;
        }
        
        function validateDueDate(dueDate){
            const pattern = /^\d{4}-\d{2}-\d{2}$/;
            if(pattern.test(dueDate.trim())){
                return true;
            }
            return false;
        }
        
        function validateNextCycleDate(date){
            const pattern = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/;
            if(pattern.test(date.trim())){
                return true;
            }
            return false;
        }
        
        
        function validateAmount(amount){
            const pattern = /^\d+$/;
            if(amount.trim() === ''){
                return true;
            }
            if(pattern.test(amount)){
                return true;
            }
            return false;
        }
        
        function validateInputContainsNumber(value){
            const pattern = /^[1-9]\d*$|^0$/;
            if(pattern.test(value)){
                return true;
            }
            return false;
        }
        
        function validateInputAcceptsFromOne(value){
            const pattern = /^[1-9]\d*$/;
            if(pattern.test(value)){
                return true;
            }
            return false;
        }
        
        function validateInstalmentCycleCount(value){
            const pattern = /^[2-9]\d*|[1-9]\d+$/;
            if(pattern.test(value)){
                return true;
            }
            return false;
        }

        function displayError(error){
            enableSubmitBtn();
            const errorElement = document.getElementById('error');
            errorElement.querySelector('small').innerHTML = error;
        }
        
        function removeField(elementID){
            if(document.getElementById(elementID)){
                document.getElementById(elementID).remove();
                document.querySelector(`label[for="${elementID}"]`).remove();
            }
        }

        function removeError(){
            const errorElement = document.getElementById('error');
            errorElement.querySelector('small').innerHTML = '';
        }
        
        function removeResponse(){
            const response = document.getElementById('response');
            response.innerHTML = '';
        }
        
        // function createTextArea(data){
        //     const textAreaDiv = document.getElementById('jsonValues');
        //     const textArea = document.createElement('textarea');
        //     textArea.setAttribute('id','callbackRequestJson');
        //     textArea.setAttribute('row',"50");
        //     textArea.setAttribute('column',"90");
        //     textArea.innerHTML = data;
        //     textAreaDiv.appendChild(textArea);
        // }

        // function createReRunBtn(){
        //     const responseDiv = document.getElementById('responseDiv');
        //     const reRunBtn = document.createElement('button');
        //     reRunBtn.setAttribute('id','reRunBtn');
        //     reRunBtn.setAttribute('value','Edit-Resend');
        //     reRunBtn.textContent = 'Send';
        //     responseDiv.appendChild(reRunBtn);
        // }

        function removeReRunBtn(){
            const errorElement = document.getElementById('reRunBtn');
            if(errorElement){
                errorElement.remove();
            }
        }

        function disableReRunBtn(){
            const submitBtnEle = document.getElementById('reRunBtn');
            submitBtnEle.disabled = true;
            reRunBtn.textContent = 'Sending wait...';
            submitBtnEle.classList.add('disabled');
        }

        function enableReRunBtn(){
            const submitBtnEle = document.getElementById('reRunBtn');
            submitBtnEle.disabled = false;
            reRunBtn.textContent = 'Send';
            submitBtnEle.classList.remove('disabled');
        }

        function removeTextArea(){
            const errorElement = document.getElementById('callbackRequestJson');
            if(errorElement){
                errorElement.remove();
            }
        }

        //Run the callback
        document.getElementById('responseDiv').addEventListener('click',function(evt){
            if(evt.target.tagName === 'BUTTON' && evt.target.id === 'reRunBtn') {
                removeRedBorder("url");
                removeError();
                const callbackURL = callbackUrlEle.value.trim();
                if(!validateURL(callbackURL)){
                    changeBorderToRed(callbackUrlEle);
                    displayError("<br>Invalid callback URL</br>");
                    return;
                }
                removeResponse();
                disableReRunBtn();
            const json = document.getElementById('callbackRequestJson').value;
            var updatedData;
            try{
                updatedData = JSON.parse(json);
            }catch(err){
                alert("Invalid JSON please make sure: "+err);
                enableReRunBtn();
                return;
            }
            createChecksum2(updatedData)
                .then(checksumResponse => {
                        updatedData['event']['checksum'] = checksumResponse.checksum;
                        callbackRequest(proxy+callbackURL,updatedData)
                        .then(response => {
                                document.getElementById('response').innerHTML = "<b>RESPONSE:</b><br><br>"+ response;
                                const reqData = JSON.stringify(updatedData,null,4);
                                document.getElementById('callbackRequestJson').value = reqData;
                                enableReRunBtn();
                        }).catch(error =>{
                            enableReRunBtn();
                            console.log("Unexpected error happened during Callback request to shop "+error);
                        });
                 }).catch(error =>{
                    enableReRunBtn();
                    console.log("Unexpected error happened during checksum creation "+error);
                    alert("Error happened during checksum creation "+error);
                });
            }
        });
        
        //Format the json paste in the textarea
        const jsonFormatBtn = document.getElementById('jsonFormatBtn');
        jsonFormatBtn.addEventListener('click',function(){
            const json = document.getElementById('callbackRequestJson').value;
            try{
                var updatedData = JSON.parse(json);
                document.getElementById('callbackRequestJson').value = JSON.stringify(updatedData,null,4);
            }catch(err){
                alert("Invalid JSON please make sure: "+err);
                return;
            }
        });    
   
                                             
      async function getData(requestURL,requestData,accessKey) {
        const response = await fetch(requestURL,{
            method: 'POST',
            headers: {
                'X-NN-Access-Key': btoa(accessKey),
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Charset': 'utf-8'          
            },
            body: JSON.stringify(requestData)
          });
        const data = await response.json();
      return data;
      }
      
      async function callbackRequest(callbackURL, callbackReqData){
            const response = await fetch(callbackURL,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'      
                },
                body: JSON.stringify(callbackReqData)
            });
            const contentType = response.headers.get('Content-Type');
            let data;
            if(contentType.includes('application/json')){
                data = await response.json();
            }else if(contentType.includes('text/plain')){
                data = await response.text();
            }else if(contentType.includes('text/html')){
                data = await response.text();
            }else{
                throw new Error(`Unsupported content type: ${contentType}`);
            }
        return data; 
      }
      
      function verifyTIDStatusCodeValid(data){
          const statusCode = data.result.status_code;
          if(statusCode === 200018 || statusCode === 1002 || statusCode === 1003 || statusCode === 105 || statusCode === 1007){
                return false;
          }
         return true;
      }
      
      function verifyEventTypeWithPaymentTypeOfTID(formData,txnData){
          const tidPaymentType = txnData.transaction.payment_type;
          var valid = false; 
          individualPaymentTypes.forEach((value,key) => {
              if(tidPaymentType === key){
                 valid = value.includes(formData.paymentType);
              }
          });
          return valid;
      }
      
      function verifySubscriptionEventAgainstTID(formData,txnData){
          const subscriptionEvents = ["RENEWAL","SUBSCRIPTION_UPDATE","SUBSCRIPTION_SUSPEND","SUBSCRIPTION_REACTIVATE","SUBSCRIPTION_CANCEL"];
          if(subscriptionEvents.includes(formData.eventType)){
            if(txnData.hasOwnProperty('subscription')){
                return true;
            }
            return false;  
          }
        return true;
      }
      
      function formCallbackData(formData, txnData){         
          var eventJson = {};
          const modifiedData = {};
          const eventType = formData.eventType;
          


          //create parent and child tid
          const childParentTIDPayments = ["CREDIT","TRANSACTION_REFUND","CHARGEBACK","INSTALMENT","INSTALMENT_CANCEL","RENEWAL"];
          eventJson.checksum = "checksum";
          if(childParentTIDPayments.includes(formData.eventType)){
               eventJson.parent_tid = txnData.transaction.tid; 
               eventJson.tid = generateRandomTID();
               if(txnData.transaction.status != 'CONFIRMED'){
                    txnData.transaction.status = "CONFIRMED";
                    txnData.transaction.status_code = 100;
                }
          }else{
              eventJson.tid = txnData.transaction.tid;
          }
          eventJson.type = eventType;
          modifiedData.event = eventJson;
          
          //To remove the payment data for unnecessary events
          if(eventType != 'PAYMENT' && eventType != 'INSTALMENT'){
                if(txnData.transaction.hasOwnProperty('payment_data')){
                    delete txnData.transaction.payment_data; 
                }if(txnData.transaction.hasOwnProperty('nearest_stores')){
                    delete txnData.transaction.nearest_stores;
                    delete txnData.transaction.slip_id;
                }if(txnData.transaction.hasOwnProperty('txn_secret')){
                    delete txnData.transaction.txn_secret;
                }
           }
           
           //To execute the followup events for orders confirmed from communication break. cause we get the result status as FAILURE for progress TIDs
           if(eventType != 'PAYMENT'){
               txnData.result.status = "SUCCESS";
               txnData.result.status_code = 100;
               txnData.result.status_text = "Successful";
                if(txnData.transaction.hasOwnProperty('additional_message')){
                    delete txnData.transaction.additional_message; 
                }
            }
            
            //To make the tid transaction status to confirmed for the followup events
            const followUpPaymentsHasTxnStatusConfirmed = ["SUBSCRIPTION_CANCEL","SUBSCRIPTION_UPDATE","SUBSCRIPTION_SUSPEND","SUBSCRIPTION_REACTIVATE"];
            if(followUpPaymentsHasTxnStatusConfirmed.includes(formData.eventType)){
                if(txnData.transaction.status != 'CONFIRMED'){
                    txnData.transaction.status = "CONFIRMED";
                    txnData.transaction.status_code = 100;
                }if(txnData.transaction.payment_type === 'INVOICE' || txnData.transaction.payment_type === 'PREPAYMENT'){
                        txnData.transaction.status = "PENDING";
                 }
            }
            
          switch(eventType){
              
            case 'PAYMENT' :
                txnData.result.status = formData.resultStatus;
                if(formData.amount != ''){
                    txnData.transaction.amount = parseInt(formData.amount); 
                }
                if(formData.resultStatus === 'SUCCESS'){
                    txnData.result.status_text = "Successful";
                    txnData.result.status_code = 100;
                    txnData.transaction.status = formData.transactionStatus;
                    txnData.transaction.status_code = 100;
                }else{
                    txnData.transaction.status = formData.resultStatus;
                    if(txnData.transaction.payment_type === 'CREDITCARD'){
                        txnData.result.status_text = "3D-Secure authentication failed";
                        txnData.transaction.status_code = 96;
                        txnData.result.status_code = 96;
                    }else{
                        txnData.result.status_text = "User aborted the transaction";
                        txnData.transaction.status_code = 94;
                        txnData.result.status_code = 94;    
                    }
                }
                break;
            
            case 'TRANSACTION_CAPTURE' :
                txnData.transaction.status_code = 100;
                if(txnData.transaction.payment_type === 'INVOICE'){
                    txnData.transaction.status = "PENDING";
                }else{
                    txnData.transaction.status = "CONFIRMED";
                }
                if(txnData.transaction.payment_type === 'INSTALMENT_INVOICE' || txnData.transaction.payment_type === 'INSTALMENT_DIRECT_DEBIT_SEPA'){
                    txnData.instalment.cycles_executed = 1;
                    txnData.instalment.pending_cycles = parseInt((formData.instalmentCyclesCount)-1);
                    const cycleDates = getUpcomingMonthDates(formData.instalmentCyclesCount);                   
                    txnData.instalment.cycle_dates = {...Object.fromEntries(cycleDates)};
                    txnData.instalment.next_cycle_date = cycleDates.get('2');
                }
                //update the due date for pending tid's
                if(txnData.transaction.payment_type === 'GUARANTEED_INVOICE' || txnData.transaction.payment_type === 'INSTALMENT_INVOICE'){
                    if(!txnData.transaction.hasOwnProperty('due_date')){
                        txnData.transaction.due_date = calculateUpcomingDate(30);
                    }
                }
                break;
                
            case 'TRANSACTION_CANCEL' :
                txnData.transaction.status_code = 103;
                txnData.transaction.status = "DEACTIVATED";
                if(txnData.hasOwnProperty('instalment')){
                    delete txnData.instalment; 
                }
                delete txnData.transaction.currency;
                delete txnData.transaction.amount;
                break;
                
            case 'TRANSACTION_REFUND' :
                const refundJson = {};
                if(txnData.transaction.hasOwnProperty('authorization')){
                    delete txnData.transaction.authorization;
                }
                if(formData.amount != '' && formData.amount < txnData.transaction.amount){
                    refundJson.amount = parseInt(formData.amount);
                }
        
                else{
                    if(formData.paymentType === 'INSTALMENT_SEPA_BOOKBACK' || formData.paymentType === 'INSTALMENT_INVOICE_BOOKBACK'){
                        refundJson.amount = txnData.instalment.cycle_amount;
                        delete txnData.instalment;
                    }else{
                        refundJson.amount = txnData.transaction.amount;
                    }
                }
                if(txnData.transaction.amount === 0 && formData.amount != ''){
                    refundJson.amount = parseInt(formData.amount);
                    txnData.transaction.amount = parseInt(formData.amount);
                }
                txnData.transaction.refunded_amount = refundJson.amount;
                refundJson.payment_type = formData.paymentType;
                refundJson.currency = txnData.transaction.currency;
                refundJson.tid = modifiedData.event.tid;
                txnData.transaction.refund = refundJson;
                break;
                
            case 'TRANSACTION_UPDATE' :
                txnData.transaction.update_type = formData.updateType;
                if(formData.updateType === 'STATUS'){
                    txnData.transaction.status = formData.updateTypeStatus;
                    if(formData.updateTypeStatus === 'CONFIRMED'){
                        txnData.transaction.status_code = 100;
                    }else if(formData.updateTypeStatus === 'DEACTIVATED'){
                        txnData.transaction.status_code = 103;
                        if(txnData.hasOwnProperty('instalment')){
                            delete txnData.instalment; 
                        }
                    }else if(formData.updateTypeStatus === 'PENDING' && formData.paymentType == 'PAYPAL'){
                        txnData.transaction.status_code = 90;
                    }else if(formData.updateTypeStatus === 'ON_HOLD'){
                        txnData.transaction.status_code = (txnData.transaction.payment_type === 'INSTALMENT_INVOICE' || txnData.transaction.payment_type === 'GUARANTEED_INVOICE') ?  91 : 99;
                    }
                    if((txnData.transaction.payment_type === 'INSTALMENT_INVOICE' || txnData.transaction.payment_type === 'INSTALMENT_DIRECT_DEBIT_SEPA') && formData.updateTypeStatus === 'CONFIRMED'){
                        txnData.instalment.cycles_executed = 1;
                        txnData.instalment.pending_cycles = parseInt((formData.instalmentCyclesCount)-1);
                        const cycleDates = getUpcomingMonthDates(formData.instalmentCyclesCount);                   
                        txnData.instalment.cycle_dates = {...Object.fromEntries(cycleDates)};
                        txnData.instalment.next_cycle_date = cycleDates.get('2');
                    }
                }else if(formData.updateType === 'AMOUNT'){
                    txnData.transaction.amount = parseInt(formData.updateAmount);
                }else if(formData.updateType === 'DUE_DATE'){
                    txnData.transaction.due_date = formData.updateDueDate;
                }else if(formData.updateType === 'AMOUNT_DUE_DATE'){
                    txnData.transaction.amount = parseInt(formData.updateAmount);
                    txnData.transaction.due_date = formData.updateDueDate;
                }
                if(txnData.transaction.payment_type === 'INVOICE'){
                    txnData.transaction.status_code = 100;
                    txnData.transaction.status = 'PENDING';
                }
                //update the due date for pending tid's
                if(txnData.transaction.payment_type === 'GUARANTEED_INVOICE' || txnData.transaction.payment_type === 'INSTALMENT_INVOICE'){
                    if(!txnData.transaction.hasOwnProperty('due_date')){
                        txnData.transaction.due_date = calculateUpcomingDate(30);
                    }
                }
                break;
                
            case 'CREDIT' :
                txnData.transaction.payment_type = formData.paymentType;
                txnData.transaction.tid = modifiedData.event.tid;
                if(formData.amount != ''){
                    txnData.transaction.amount = parseInt(formData.amount);
                }
                if(txnData.transaction.hasOwnProperty('bank_details')){
                    txnData.transaction.credit_details = txnData.transaction.bank_details;
                    delete txnData.transaction.bank_details;
                }
                break;
                
            case 'CHARGEBACK' :
                txnData.transaction.payment_type = formData.paymentType;
                txnData.transaction.tid = modifiedData.event.tid;
                if(formData.amount != ''){
                    txnData.transaction.amount = parseInt(formData.amount);
                }
                txnData.transaction.reason = "Fraudulent Transaction - No cardholder authentication";
                txnData.transaction.reason_code = 48376;
                break;
            
            case 'INSTALMENT' :
                if(formData.prepaidType === '1'){
                    txnData.instalment.prepaid =formData.prepaidType;
                }
                txnData.instalment.cycles_executed = parseInt(formData.instalmentCyclesExecuted);
                if(parseInt(formData.instalmentPendingCycles) === 0){
                    if(txnData.instalment.hasOwnProperty('next_cycle_date')){
                        delete txnData.instalment.next_cycle_date;
                    }
                    //to verify the last cycle amount with total amount
                    if(txnData.instalment.cycle_amount != txnData.transaction.amount){
                        let totalAmount = txnData.instalment.cycles_executed*txnData.instalment.cycle_amount;
                        let difference = txnData.transaction.amount-totalAmount;
                        txnData.instalment.cycle_amount+=difference;
                    }
                }else{
                    txnData.instalment.next_cycle_date = formData.instalmentNextCycleDate;
                }
                txnData.instalment.pending_cycles = parseInt(formData.instalmentPendingCycles);
                txnData.transaction.tid = modifiedData.event.tid;
                if(txnData.instalment.hasOwnProperty('cycle_dates')){
                    delete txnData.instalment.cycle_dates;
                }
                break;
            
            case 'INSTALMENT_CANCEL' :
                if(formData.instalmentCancelType === 'ALL_CYCLES'){
                    const instalmentCancelrefundJson = {};
                    instalmentCancelrefundJson.amount = txnData.instalment.cycle_amount;
                    instalmentCancelrefundJson.currency = txnData.transaction.currency;
                    if(txnData.transaction.payment_type === 'INSTALMENT_INVOICE'){
                        instalmentCancelrefundJson.payment_type = 'INSTALMENT_INVOICE_BOOKBACK';
                    }else if(txnData.transaction.payment_type === 'INSTALMENT_DIRECT_DEBIT_SEPA'){
                        instalmentCancelrefundJson.payment_type = 'INSTALMENT_SEPA_BOOKBACK';
                    }                       
                    instalmentCancelrefundJson.tid = modifiedData.event.tid;
                    txnData.transaction.refund = instalmentCancelrefundJson;
                }else if(formData.instalmentCancelType === 'REMAINING_CYCLES'){
                    modifiedData.event.tid = modifiedData.event.parent_tid;
                    delete modifiedData.event.parent_tid;
                }
                txnData.instalment = {};
                txnData.instalment.cancel_type = formData.instalmentCancelType;
                txnData.instalment.tid = txnData.transaction.tid;
                break;
                
            case 'PAYMENT_REMINDER_1' :
                txnData.transaction.payment_type = formData.paymentType;
                txnData.transaction.status = "PENDING";
                txnData.transaction.status_code = 100;
                txnData.reminder = {};
                txnData.reminder.claim_amount = txnData.transaction.amount;
                txnData.reminder.currency = txnData.transaction.currency;
                txnData.reminder.claim_charges = parseInt(txnData.transaction.amount * 0.1);
                txnData.reminder.claim_fee = parseInt(txnData.transaction.amount * 0.2);
                txnData.reminder.amount = txnData.reminder.claim_amount + txnData.reminder.claim_charges + txnData.reminder.claim_fee;
                txnData.reminder.date = getTodayDate();
                break;
            
            case 'PAYMENT_REMINDER_2' :
                txnData.transaction.payment_type = formData.paymentType;
                txnData.transaction.status = "PENDING";
                txnData.transaction.status_code = 100;
                txnData.reminder = {};
                txnData.reminder.claim_amount = txnData.transaction.amount;
                txnData.reminder.currency = txnData.transaction.currency;
                txnData.reminder.claim_charges = parseInt(txnData.transaction.amount * 0.1);
                txnData.reminder.claim_fee = parseInt(txnData.transaction.amount * 0.2);
                txnData.reminder.amount = txnData.reminder.claim_amount + txnData.reminder.claim_charges + txnData.reminder.claim_fee;
                txnData.reminder.date = getTodayDate();
                break;
                
            case 'SUBMISSION_TO_COLLECTION_AGENCY' :
                txnData.transaction.payment_type = formData.paymentType;
                txnData.transaction.status = "PENDING";
                txnData.transaction.status_code = 100;
                txnData.collection = {};
                txnData.collection.claim_amount = txnData.transaction.amount;
                txnData.collection.currency = txnData.transaction.currency;
                txnData.collection.claim_charges = parseInt(txnData.transaction.amount * 0.1);
                txnData.collection.claim_fee = parseInt(txnData.transaction.amount * 0.2);
                const reminderAmount = txnData.collection.claim_amount + txnData.collection.claim_charges + txnData.collection.claim_fee;
                txnData.collection.amount = reminderAmount;
                txnData.collection.reference = "000025-F00002774";
                txnData.collection.status_text = "Collection in progress";
                txnData.collection.date = getTodayDate();
                break;
           
            case 'RENEWAL' :
                txnData.transaction.amount = txnData.subscription.amount;
                txnData.subscription.next_cycle_date = formData.subsNextCycleDate;
                if(!txnData.subscription.hasOwnProperty('next_cycle_date')){
                    txnData.subscription.next_cycle_date = getNextMonth();
                }
                txnData.transaction.tid = modifiedData.event.tid;
                break;
                
            case 'SUBSCRIPTION_UPDATE' :
                const formSubData = new FormData(formEle); 
                formSubData.forEach((value, key) => { 
                    formSubData[key] = [value]; 
                });
            
                txnData.subscription.update_type = formSubData.subsUpdateType;
                if(formSubData.subsUpdateType ===  'RENEWAL_AMOUNT' || formData.subsUpdateType === 'RENEWAL_AMOUNT'){
                    txnData.subscription.amount = parseInt(formData.subsAmount);
                    delete txnData.transaction.amount;
                }else if(formSubData.subsUpdateType === 'RENEWAL_DATE' || formData.subsUpdateType === 'RENEWAL_DATE'){
                    txnData.subscription.next_cycle_date = formData.subsNextCycleDate;
                    delete txnData.transaction.amount;
                }else if(formSubData.subsUpdateType === 'PAYMENT_DATA'|| formData.subsUpdateType === 'PAYMENT_DATA'){
                    txnData.subscription.payment_type = formData.subsChangePayment;
                    txnData.transaction.payment_type = formData.subsChangePayment;
                    txnData.transaction.tid = parseInt(generateRandomTID());
                    txnData.transaction.amount = 0;
                    if(formData.subsChangePayment === 'CREDITCARD' || formData.subsChangePayment === 'DIRECT_DEBIT_SEPA' || formData.subsChangePayment === 'PAYPAL' || formData.subsChangePayment === 'DIRECT_DEBIT_ACH'){
                        txnData.transaction.payment_data = {};
                        txnData.transaction.payment_data.token = "RcB2w22w00a02c-R22w22wXVT22w-V22w24y20u18sDB18sB00a16q14oNZ04ePJ";
                    }
                }
                break;
                 
            case 'SUBSCRIPTION_SUSPEND' :
                delete txnData.subscription.amount;
                delete txnData.subscription.currency;
                delete txnData.subscription.next_cycle_date;
                delete txnData.subscription.payment_type;
                delete txnData.transaction.amount;
                delete txnData.transaction.currency;
                break;
                
            case 'SUBSCRIPTION_REACTIVATE' :
                txnData.subscription.reactivate_type = formData.subsReactivateType;
                if(formData.subsReactivateType === 'EXPLICIT'||formData.subsReactivateType === 'CREDIT'|| formData.subsReactivateType === 'PAYMENT_UPDATE'){
                delete txnData.subscription.payment_type;
                if(!txnData.subscription.hasOwnProperty('next_cycle_date')){
                    txnData.subscription.next_cycle_date = getNextMonth();
                }}
                delete txnData.transaction.amount;
                delete txnData.transaction.currency;
                break;
                
            case 'SUBSCRIPTION_CANCEL' :  
                delete txnData.subscription.amount;
                delete txnData.subscription.currency;
                delete txnData.subscription.next_cycle_date;
                delete txnData.subscription.payment_type;
                txnData.subscription.cancel_type = "EXPLICIT";
                txnData.subscription.reason = "Too expensive";
                delete txnData.transaction.amount;
                delete txnData.transaction.currency;
                break;
                
                
            
            default:
                console.log("Unexpected Error while selecting the events");
          }
          
          //Merge both objects, I have done this only for print the event on the top of request.
          Object.assign(modifiedData,txnData);          
          
          return modifiedData; 
      }
  
      //Generate checksum function
      async function createCheckSum(tid, eventType, resutlStatus, amount, currency, accessKey){
          var tokenString = tid+eventType+resutlStatus;
          if(amount !== undefined){
              tokenString += amount;
          }
          if(currency !== undefined){
              tokenString += currency;
          }
          if(accessKey != ''){
              tokenString += reverseString(accessKey);
          }
          
          
          
          // Create a new instance of the SHA-256 hash function
          const hash = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(tokenString));


          // Convert the hash to a hexadecimal string
          const checksum = Array.from(new Uint8Array(hash))
            .map((byte) => byte.toString(16).padStart(2, '0'))
            .join('');

          // Return the checksum
          return checksum;  
      }

      //getting the accesskey
      const accessKeyDropdown = document.getElementById('accessKeyVal');
      let selectedAccessKey = accessKeyDropdown.value;

      accessKeyDropdown.addEventListener('change',function(){
        selectedAccessKey = accessKeyDropdown.value;
      });

       //Generate checksum via php to bypass CORS error
      async function createChecksum2(updatedData) {
        var tokenString = updatedData['event']['tid']+updatedData['event']['type']+updatedData['result']['status'];
        if(updatedData['transaction']['amount'] !== undefined){
            tokenString += updatedData['transaction']['amount'];
        }
        if(updatedData['transaction']['currency'] !== undefined){
            tokenString += updatedData['transaction']['currency'];
        }
        tokenString += reverseString(selectedAccessKey);
        // Encode the data as a query parameter
        var dataParam = encodeURIComponent(tokenString);
        // Make an AJAX request to the PHP script
        const checksum = await fetch("checksum.php?data=" + dataParam);
        const checksumResponse =  await checksum.json();
        return checksumResponse;
      }
      
      
      function reverseString(str){
          let reversedString = "";
        for(let i=str.length-1;i>=0;i--){
            reversedString += str[i];
        }
        return reversedString;  
      }
      
      function getToday(){
        const date = new Date();
        const year = date.getFullYear();
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const day = ('0' + date.getDate()).slice(-2);
        const hours = ('0' + date.getHours()).slice(-2);
        const minutes = ('0' + date.getMinutes()).slice(-2);
        const seconds = ('0' + date.getSeconds()).slice(-2);
        const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
        return formattedDate;
      }
      
      function getTodayDate(){
        const date = new Date();
        const year = date.getFullYear();
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const day = ('0' + date.getDate()).slice(-2);
        const formattedDate = `${year}-${month}-${day}`;
        return formattedDate;
      }
      
      function getNextMonth(){
        const date = new Date();
        const year = date.getFullYear();
        const month = ('0' + (date.getMonth() + 2)).slice(-2);
        const day = ('0' + date.getDate()).slice(-2);
        const hours = ('0' + date.getHours()).slice(-2);
        const minutes = ('0' + date.getMinutes()).slice(-2);
        const seconds = ('0' + date.getSeconds()).slice(-2);
        const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
        return formattedDate;
      }
      
      function getUpcomingMonthDates(numberOfMonths){
        const now = new Date();
        const dates = new Map();

        for (let i = 0; i < numberOfMonths; i++) {
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, "0");
            const day = String(now.getDate()).padStart(2, "0");
            const hours = String(now.getHours()).padStart(2, "0");
            const minutes = String(now.getMinutes()).padStart(2, "0");
            const seconds = String(now.getSeconds()).padStart(2, "0");
            const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
            dates.set(`${i + 1}`, formattedDate);
            now.setMonth(now.getMonth() + 1);
        }
        return dates;
      }

      function calculateUpcomingDate(dayCount) {
        var today = new Date();
        var upcomingDate = new Date();
        upcomingDate.setDate(today.getDate() + dayCount);
      
        var year = upcomingDate.getFullYear();
        var month = String(upcomingDate.getMonth() + 1).padStart(2, '0');
        var day = String(upcomingDate.getDate()).padStart(2, '0');
      
        return year + '-' + month + '-' + day;
      }
      
      
      function generateRandomTID() {
          const prefix = '14';
          const suffixLength = 15;
          const maxNumber = Math.pow(10, suffixLength) - 1;
          const suffix = Math.floor(Math.random() * maxNumber).toString().padStart(suffixLength, '0');
          return (prefix + suffix);
      }

