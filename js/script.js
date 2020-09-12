function getSingleCase(caseID){
    //return case object
    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        async:false,
        url: 'https://bigeye3.herokuapp.com/api/cases/'+caseID+'/',
        success: function (data) {
            // location.reload();
            cases1 = data;

        },
        error: function (err) {
            console.log(err);
        }

    });
    return cases1;
}

function getSingleEquipment(EquipmentID){
    //return equipment object
    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        async:false,
        url: 'https://bigeye3.herokuapp.com/api/equipments/'+EquipmentID+'/',
        success: function (data) {
            // location.reload();
            equipment = data;
        },
        error: function (err) {
            console.log(err);
        }

    });
    return equipment;
}
function  getSingleAssignment(id){
    //return assignment object
    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        async:false,
        url: 'https://bigeye3.herokuapp.com/api/assignments/'+id+'/',
        success: function (data) {
            // location.reload();
            assignment = data;
        },
        error: function (err) {
            console.log(err);
        }

    });
    return assignment;
}
function  getSingleInvestigator(InvestigatorID){
    //return investigator object
    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        async:false,
        url: 'https://bigeye3.herokuapp.com/api/investigators/'+InvestigatorID+'/',
        success: function (data) {
            // location.reload();
            investigator = data;

        },
        error: function (err) {
            console.log(err);
        }

    });
    return investigator;
}
function  getSingleAllocation(id){
    //return Allocation object
    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        async:false,
        url: 'https://bigeye3.herokuapp.com/api/allocations/'+id+'/',
        success: function (data) {
            // location.reload();
            allocation = data;
        },
        error: function (err) {
            console.log(err);
        }

    });
    return allocation;
}
function  getSingleClient(ClientID){
    //return Client object
    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        async:false,
        url: 'https://bigeye3.herokuapp.com/api/clients/'+ClientID+'/',
        success: function (data) {
            // location.reload();
            client = data;
        },
        error: function (err) {
            console.log(err);
        }

    });
    return client;
}
function assignedAssignment(Investigator){
    //return assessment objects
    assessments = [];
    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        async:false,
        url: 'https://bigeye3.herokuapp.com/api/assignments/',
        success: function (data) {
            // location.reload();
            i = 0;
            while (i<data.length){
                assignment = data[i];
                if (assignment.Investigator == Investigator){
                    assessments.push(assignment);
                }
                i=i+1;
            }

        },
        error: function (err) {
            console.log(err);
        }

    });
    return assessments;
}

function assignedAssignment2(case2){
    //return assessment objects
    assessments = [];
    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        async:false,
        url: 'https://bigeye3.herokuapp.com/api/assignments/',
        success: function (data) {
            // location.reload();
            i = 0;
            while (i<data.length){
                assignment = data[i];
                if (assignment.Case == case2){
                    assessments.push(assignment);
                }
                i=i+1;
            }

        },
        error: function (err) {
            console.log(err);
        }

    });
    return assessments;
}

function assignedAssignment2(Case){
    //return assessment objects
    assessments = [];
    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        async:false,
        url: 'https://bigeye3.herokuapp.com/api/assignments/',
        success: function (data) {
            // location.reload();
            i = 0;
            while (i<data.length){
                assignment = data[i];
                if (assignment.Case == Case){
                    assessments.push(assignment);
                }
                i=i+1;
            }

        },
        error: function (err) {
            console.log(err);
        }

    });
    return assessments;
}
function assignedAllocation(Case){
    //return assessment objects
    allocations = [];
    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        async:false,
        url: 'https://bigeye3.herokuapp.com/api/allocations/',
        success: function (data) {
            // location.reload();
            i = 0;
            while (i<data.length){
                allocation = data[i];
                if (allocation.Case == Case){
                    allocations.push(allocation);
                }
                i=i+1;
            }

        },
        error: function (err) {
            console.log(err);
        }

    });
    return allocations;
}

function assignedPayment(Case){
    //return assessment objects
    payments = [];
    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        async:false,
        url: 'https://bigeye3.herokuapp.com/api/payments/',
        success: function (data) {
            // location.reload();
            i = 0;
            while (i<data.length){
                payment = data[i];
                if (payment.Case == Case){
                    payments.push(payment);
                }
                i=i+1;
            }

        },
        error: function (err) {
            console.log(err);
        }

    });
    return payments;
}
function assignedclient(Client1){
    //return assessment objects
    clients = [];
    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        async:false,
        url: 'https://bigeye3.herokuapp.com/api/cases/',
        success: function (data) {
            // location.reload();
            i = 0;
            while (i<data.length){
                client = data[i];
                if (client.Client == Client1){
                    clients.push(client);
                }
                i=i+1;
            }

        },
        error: function (err) {
            console.log(err);
        }

    });
    return clients;
}


function getAvailableCase(Investigator) {
    cases = [];
    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        url: 'https://bigeye3.herokuapp.com/api/assignments/',
        async: false,
        success: function (data) {
            i = 0;
            while (i < data.length) {
                ass = data[i];
                if (ass.Investigator != Investigator) {
                    cases.push(ass.Case);
                }
                i = i + 1;
            }
        },
        error: function (err) {
            console.log(err);
        }
    });
    return cases;
}

function getAssignment(Instigator, Case) {
    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        url: 'https://bigeye3.herokuapp.com/api/assignments/',
        async: false,
        success: function (data) {
            i = 0;
            while (i < data.length) {
                ass = data[i];
                if (ass.Investigator == Instigator && ass.Case == Case) {
                    assid = ass.id
                }
                i = i + 1;
            }
        },
        error: function (err) {
            console.log(err);
        }
    });
    return assid;
}
function getAssignedCase(Instigator) {
    cases = [];
    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        url: 'https://bigeye3.herokuapp.com/api/assignments/',
        async: false,
        success: function (data) {
            i = 0;
            while (i < data.length) {
                ass = data[i];
                if (ass.Investigator == Instigator) {
                    cases.push(ass.Case);
                }
                i = i + 1;
            }
        },
        error: function (err) {
            console.log(err);
        }
    });
    return cases;
}
function getClosedCase() {
    //return closed cases
    cases = [];
    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        async: false,
        url: 'https://bigeye3.herokuapp.com/api/cases/',
        success: function (data) {
            // location.reload();
            i = 0;
            while (i < data.length) {
                case1 = data[i];
                if (case1.Status == "Closed") {
                    cases.push(case1);
                }
                i++;
            }
            // console.log(data);
        },
        error: function (err) {
            console.log(err);
        }
    });
    return cases;
}
function getCompletedCase() {
    //return closed cases
    cases = [];
    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        async: false,
        url: 'https://bigeye3.herokuapp.com/api/cases/',
        success: function (data) {
            // location.reload();
            i = 0;
            while (i < data.length) {
                case1 = data[i];
                if (case1.Status == "Complete") {
                    cases.push(case1);
                }
                i++;
            }
            // console.log(data);
        },
        error: function (err) {
            console.log(err);
        }
    });
    return cases;
}
function getOpenCase() {
    //return closed cases
    cases = [];
    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        async: false,
        url: 'https://bigeye3.herokuapp.com/api/cases/',
        success: function (data) {
            // location.reload();
            i = 0;
            while (i < data.length) {
                case1 = data[i];
                if (case1.Status == "Open") {
                    cases.push(case1);
                }
                i++;
            }
            // console.log(data);
        },
        error: function (err) {
            console.log(err);
        }
    });
    return cases;
}

function getCompleteCase(CaseInput) {
    cases = [];
    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        url: 'https://bigeye3.herokuapp.com/api/assignments/',
        async: false,
        success: function (data) {
            i = 0;
            while (i < data.length) {
                ass = data[i];
                if (ass.Case != CaseInput) {
                    cases.push(ass.Case);
                }
                i = i + 1;
            }
        },
        error: function (err) {
            console.log(err);
        }
    });
    return cases;
}

