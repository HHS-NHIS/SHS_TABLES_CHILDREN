var isPivot = false; var initCols = [
                      { title: "Year", className: "sub", "visible": false},
                      { title: "row_var", className: "sub", "visible": false},
                      { title: "rowLevels" , className: "main"},
                      { title: "rowLevNum" , className: "sub", "visible": false},
                      { title: "selected",   className: "sub", "visible" : false},
                      
                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay}]; var initLevels = {"agegrps":{"agegrpsA":"0-4 years","agegrpsD":"5-11 years","agegrpsE":"12-17 years","agegrpsB":"6 months-4 years","agegrpsC":"3-4 years"},"disability":{"disabilityA":"With disability","disabilityB":"Without disability"},"education":{"educationA":"Less than high school diploma","educationB":"High school diploma or GED","educationC":"Some college","educationD":"College degree or higher"},"family":{"familyA":"Single parent, never married","familyB":"Single parent, ever married","familyC":"Married parents","familyD":"Cohabiting parents","familyE":"At least one related or unrelated adult (not a parent)"},"hisprace":{"hispraceA":"Hispanic or Latino","hispraceC":"Not Hispanic or Latino","hispraceB":"Mexican or Mexican American","hispraceD":"Not Hispanic or Latino, White, single race","hispraceE":"Not Hispanic or Latino, Black or African American, single race","hispraceF":"Other, non-Hispanic"},"insurance":{"insuranceA":"Private","insuranceB":"Medicaid or other public","insuranceC":"Other coverage","insuranceD":"Uninsured"},"metro":{"metroA":"Large central metro","metroB":"Large fringe metro","metroC":"Medium and small metro","metroD":"Nonmetropolitan"},"msa":{"msaA":"Large MSA","msaB":"Small MSA","msaC":"Not in MSA"},"poverty":{"povertyA":"Less than 100% FPL","povertyB":"100% to less than 200% FPL","povertyC":"200% and greater FPL"},"race":{"raceA":"White, single race","raceB":"Black or African American, single race","raceC":"American Indian or Alaska Native, single race","raceD":"Asian, single race","raceE":"Native Hawaiian or Other Pacific Islander, single race","raceF":"Black or African American and White","raceG":"American Indian or Alaska Native and White"},"region":{"regionA":"Northeast","regionB":"Midwest","regionC":"South","regionD":"West"},"sex":{"sexA":"Male","sexB":"Female"},"svi":{"sviA":"Little to no social vulnerability","sviB":"Low social vulnerability","sviC":"Medium social vulnerability","sviD":"High social vulnerability"},"work":{"workA":"No working parents","workB":"Single parent, working","workC":"Two parents, one working","workD":"Two parents, both working"}}; var subLevels = ["Physician office visits","Non-physician office visits","Physician hosp. visits","Non-physician hosp. visits"];
