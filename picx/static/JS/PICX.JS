

window.addEventListener("load", function () {
    var xhr5 = new XMLHttpRequest();
    var xhr4 = new XMLHttpRequest();
    var xhr3 = new XMLHttpRequest();
    var xhr2 = new XMLHttpRequest();
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function () {
        if (xhr.responseText.substring(2, 22) === '<div id="feedbackID"') {
            document.getElementById('feedDIV').innerHTML = xhr.responseText;
        } else {
            document.getElementsByTagName("body")[0].innerHTML = xhr.responseText;
            loadImagePoolPageHandlers();
            loadscndPageListeners();
            loadfirstPageListeners();
            loadMosaicPageHandlers();
            loadSettingPageHandlers();
        }
        checkCookie()
    });
    xhr5.addEventListener("load", function () {
        if (xhr5.responseText.substring(0, 22) == '<div id="settingTitle"') {
            document.getElementById('settingsContent').innerHTML = xhr5.responseText;
            loadChangeandDeleteHandler();
        } else {
            //this happens when Acc is sucessfully deleted
            document.getElementsByTagName("body")[0].innerHTML = xhr5.responseText;
            loadfirstPageListeners();
        }
    });
    xhr4.addEventListener("load", function () {
        document.getElementById('poolModal-ContentData').innerHTML = xhr4.responseText;
        loadImagePoolPageHandlers();
        deleteImgfromPool();
    });
    xhr2.addEventListener("load", function () {
        document.getElementById('graph-PoolModal-content').innerHTML = xhr2.responseText;
        loadImagePoolPageHandlers();
    });
    xhr3.addEventListener("load", function () {
        console.log(xhr3.responseText);
        document.getElementById('feedDIV').innerHTML = xhr3.responseText;

    });

    var popUP = document.getElementById("popUPID");
    var popupContent = document.getElementById("pupup-contentID");


    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    checkCookie()
    function checkCookie() {
        var currentKachelsize = getCookie("currentKachelSize");
        var currentKachelmode = getCookie("currentKachelMode");
        var currentMosaicPool = getCookie("currentMosaicPool");
        var currentChoosenAlbum = getCookie("currentChooseAlbum");
        var curentAlbum = getCookie("currentAlbum");
        if (document.body.contains(document.getElementById("fieldsetImgPool")) && currentKachelsize != null) {
            document.getElementById("kachelSizeImg-pool").value = currentKachelsize;
        }
        if (document.body.contains(document.getElementById("mosaic-fieldset"))) {
            if (currentKachelmode != "" && currentKachelmode != null) {
                document.getElementById("kachelmodeID").value = currentKachelmode.slice(1, -1);
            }
            if (currentMosaicPool != null) {
                if (currentMosaicPool.slice(-1) == '"' && currentMosaicPool.charAt(0) == '"') {
                    document.getElementById("selectedPoolID").value = currentMosaicPool.slice(1, -1);
                } else {
                    document.getElementById("selectedPoolID").value = currentMosaicPool;
                }
            }
            if (currentChoosenAlbum != null) {
                if (currentChoosenAlbum.slice(-1) == '"' && currentChoosenAlbum.charAt(0) == '"') {
                    document.getElementById("chooseAlbumID").value = currentChoosenAlbum.slice(1, -1);
                } else {
                    document.getElementById("chooseAlbumID").value = currentChoosenAlbum
                }
            }
        }
        if (document.body.contains(document.getElementById("selectAlbumDiv"))) {
            var currentAlbum;
            if (curentAlbum != null) {
                if (curentAlbum.slice(-1) == '"' && curentAlbum.charAt(0) == '"') {
                    currentAlbum = curentAlbum.slice(1, -1);
                } else {
                    currentAlbum = curentAlbum
                }
                document.getElementById("albumSelection").value = currentAlbum

            }
            if (currentAlbum == null || currentAlbum == "All Images") {
                document.getElementById("deleteDropdownID").style.display = "none"
            }
        }

    }

    function deleteImgfromPool() {
        if (document.body.contains(document.getElementsByClassName("kachelPic")[0])) {
            document.querySelectorAll(".deletePoolIMG").forEach(function (poolImg) {
                poolImg.onclick = function () {
                    console.log(this.id);
                    xhr4.open("GET", "http://localhost:4242/deletePoolImg?deletePoolImage=" + this.id);
                    xhr4.send();
                }
            });
        }
    }

    loadfirstPageListeners();
    function loadfirstPageListeners() {
        if (document.body.contains(document.getElementById("reg"))) {
            popUP = document.getElementById("popUPID");
            popupContent = document.getElementById("pupup-contentID")
            document.getElementsByClassName("close")[0].addEventListener("click", function () {
                popUP.style.display = "none";
            });
            document.getElementById("reg").addEventListener("click", function () {
                createRegister();
                console.log("reg")
                popUP.style.display = "block";
            });
            document.getElementById("log").addEventListener("click", function () {
                createLogin();
                console.log("log")
                popUP.style.display = "block";
            });

        }
    }

    loadscndPageListeners();
    function loadscndPageListeners() {
        if (document.body.contains(document.getElementById("settingsID"))) {
            document.getElementById("settingsID").addEventListener("click", function () {
                console.log("settings")
            });
            giveIMGeventHandler();
        }

    }

    loadImagePoolPageHandlers();
    function loadImagePoolPageHandlers() {
        if (document.body.contains(document.getElementById('createPoolbtn'))) {

            var poolGen_btn = document.getElementById("showPoolModulGeneratorBtn");
            var poolGen_modal = document.getElementById("poolGenerator-Modal");
            poolGen_btn.addEventListener("click", function () {
                poolGen_modal.style.display = "block"
            });

            var poolModaldata = document.getElementById('poolModalshowData');
            var createPool = document.getElementById('createPoolbtn');
            var plusPool = document.getElementById('plusCreatePool');
            var addToPool = document.getElementById('addToPoolbtn');
            var showPoolModalBtn = document.getElementById('showPoolModulIDbtn');
            var poolModal = document.getElementById('poolModulID');
            var choosenPoolName = document.getElementById("poolNameID");
            plusPool.addEventListener("click", function () {
                document.getElementById('poolModalcreate').style.display = "none";
                document.getElementById('poolModalcreate2').style.display = "block";
            });
            createPool.addEventListener("click", function () {
                choosenPoolName.value = document.getElementById("createPoolname").value;
                document.getElementById('uploadPool_Btn').click();
            })
            addToPool.addEventListener("click", function () {
                var pools = document.getElementsByName('PoolRadio');
                var poolsVal;
                for (var i = 0; i < pools.length; i++) {
                    if (pools[i].checked) {
                        poolsVal = pools[i].value;
                        choosenPoolName.value = poolsVal;
                        break;
                    }
                }
                document.getElementById('uploadPool_Btn').click();
            })

            showPoolModalBtn.addEventListener("click", function () {
                poolModal.style.display = "block";
            })

            document.querySelectorAll(".show-imgPools-DataA").forEach(function (pool) {
                pool.onclick = function () {
                    //onclick statt addEventListner, weil addEventlistener bei jedem click eine funktion hinzufügt
                    console.log(this.id);
                    poolModaldata.style.display = "block";
                    xhr4.open("GET", "http://localhost:4242/showPool?poolnameID=" + this.id);
                    xhr4.send();
                }
            });

            var graphdata = document.getElementById("showGraph-Pool-Img-Modal")
            document.querySelectorAll(".barIMAGE").forEach(function (graph) {
                graph.onclick = function () {
                    console.log(graph.id);
                    graphdata.style.display = "block";
                    xhr2.open("GET", "http://localhost:4242/drawPoolGraph?drawGraph=" + this.id);
                    xhr2.send();
                };
            });

            document.getElementsByClassName("close")[0].onclick = function () {
                poolModal.style.display = "none";
            }
            document.getElementsByClassName("close")[1].onclick = function () {
                poolModaldata.style.display = "none";
                document.getElementById('poolModal-ContentData').innerHTML = "";
            }
            document.getElementsByClassName("close")[2].onclick = function () {
                poolGen_modal.style.display = "none"
            }
            document.getElementsByClassName("close")[3].onclick = function () {
                graphdata.style.display = "none"
            }

            if (document.body.contains(document.getElementsByClassName("deleteWholePool")[0])) {
                document.getElementsByClassName("deleteWholePool")[0].onclick = function () {
                    xhr.open("GET", "http://localhost:4242/deleteWholePool?deletePool=" + this.id);
                    xhr.send();
                }
            }

            window.addEventListener("click", function (event) {
                switch (event.target) {
                    case poolModal:
                        document.getElementById('poolModalcreate').style.display = "block";
                        document.getElementById('poolModalcreate2').style.display = "none";
                        poolModal.style.display = "none";
                        break
                    case poolModaldata:
                        poolModaldata.style.display = "none";
                        document.getElementById('poolModal-ContentData').innerHTML = "";
                        break
                    case poolGen_modal:
                        poolGen_modal.style.display = "none";
                        break
                    case graphdata:
                        graphdata.style.display = "none";
                        break
                }
            });
        }
    }

    loadMosaicPageHandlers();
    function loadMosaicPageHandlers() {
        if (document.body.contains(document.getElementById('imageModal2'))) {
            var createAlbumDropdown = document.getElementById("myDropdown");
            document.getElementById("createAlbumIMG").addEventListener("click", function () {
                createAlbumDropdown.classList.toggle("show");
            });
            document.getElementById("creatAlbumBTN").addEventListener("click", function () {
                createAlbumDropdown.classList.toggle("show");
                //submit value and then empty value
                var currentpool = document.getElementById("selectedPoolID").value
                var currentMode = document.getElementById("kachelmodeID").value
                var newAlbum = document.getElementById("newAlbumName").value
                xhr.open("GET", "http://localhost:4242/createAlbum?newAlbum=" + newAlbum + "&currentpool=" + currentpool + "&currentMode=" + currentMode);
                xhr.send();
                document.getElementById("newAlbumName").value = ""

            })
            var images = document.getElementsByClassName("grid-img-MosaicC");
            var modal = document.getElementById("imageModal2");
            var modalImg = document.getElementById("imgModalID");
            Array.prototype.forEach.call(images, function (img) {
                img.onclick = function () {
                    //console.log(img.src);
                    modal.style.display = "block";
                    modalImg.src = this.src;
                }

            });
            var span = document.getElementsByClassName("close")[0];
            span.onclick = function () {
                modal.style.display = "none";
            }
            window.addEventListener("click", function (event) {
                switch (event.target) {
                    case modal:
                        modal.style.display = "none";
                        break
                }
            });
            document.getElementById("upload_Btn").addEventListener("click", function () {
                document.getElementById("loadermodal").style.display = "block"
                /*document.getElementById("upload_Btn").disabled = true;*/
                document.getElementById("notePOOL").firstChild.nodeValue = "Bitte ein wenig Geduld, Bild wird verarbeitet...";
            })
        }
    }

    loadSettingPageHandlers();
    function loadSettingPageHandlers() {
        if (document.body.contains(document.getElementById('profileIDsettings'))) {
            var profilesetting = document.getElementById('profileIDsettings');
            profilesetting.addEventListener("click", function () {
                xhr.open("GET", "http://localhost:4242/settings");
                xhr.send();
            });
            var passwordsetting = document.getElementById('passwordsettings');
            passwordsetting.addEventListener("click", function () {
                xhr5.open("GET", "http://localhost:4242/changePWSite");
                xhr5.send();
            });
            var deleteAccsetting = document.getElementById('deleteACCsettings');
            deleteAccsetting.addEventListener("click", function () {
                xhr5.open("GET", "http://localhost:4242/deleteAccSite");
                xhr5.send();
            });

        }
    }


    function loadChangeandDeleteHandler() {
        if (document.body.contains(document.getElementById('changePWBtnID'))) {
            document.getElementById("changePWBtnID").addEventListener("click", function () {
                console.log("change PW site")
                var formData = new FormData(document.getElementById("changePasswordForm"));
                xhr5.open('POST', 'http://localhost:4242/changePassword');
                xhr5.send(formData);
            });

        } else if ((document.body.contains(document.getElementById('deleteAccBtnID')))) {
            document.getElementById("deleteAccBtnID").addEventListener("click", function () {
                console.log("delete Account site")
                var formData = new FormData(document.getElementById("deleteAccForm"));
                xhr5.open('POST', 'http://localhost:4242/deleteAccount');
                xhr5.send(formData);
            });

        }
    }


    function giveIMGeventHandler() {
        if (document.body.contains(document.getElementById("dropdownDelete"))) {
            var mosaicGalleryDropdown = document.getElementById("dropdownDelete");
            document.getElementById("dropdownOption").addEventListener("click", function () {
                mosaicGalleryDropdown.classList.toggle("show");
            });

            var albumSelection = document.getElementById("albumSelection");
            albumSelection.addEventListener("change", function () {
                if (document.body.contains(document.getElementById("GALLERY"))) {
                    xhr.open("GET", "http://localhost:4242/selectAlbumAndShow?album=" + this.value + "&page=mosaic");
                    xhr.send();
                } else {
                    xhr.open("GET", "http://localhost:4242/selectAlbumAndShow?album=" + this.value + "&page=base");
                    xhr.send();
                }
            })


            var deleteAlbumBtn = document.getElementById("deleteAlbum");
            deleteAlbumBtn.addEventListener("click", function () {
                console.log(document.getElementById("albumSelection").value)
                if (document.body.contains(document.getElementById("GALLERY"))) {
                    xhr.open("GET", "http://localhost:4242/deleteAlbum?album=" + document.getElementById("albumSelection").value + "&page=mosaic");
                } else {
                    xhr.open("GET", "http://localhost:4242/deleteAlbum?album=" + document.getElementById("albumSelection").value + "&page=base");
                }
                xhr.send();
            })
        }
        var images = document.getElementsByClassName("grid-img");
        var downloadImg = document.getElementsByClassName("overlayDownload");
        var infoImg = document.getElementsByClassName("overlayInfo");
        var modal = document.getElementById("imageModal");
        var modalImg = document.getElementById("imgModalID");
        var infoModalImg = document.getElementById("imgInfoModalID");
        var infoModalText = document.getElementById("imgInfoText");
        Array.prototype.forEach.call(images, function (img, i) {
            img.addEventListener("click", function () {
                //console.log(img.src);
                modal.style.display = "block";
                modalImg.src = this.src;
                document.getElementsByClassName("deleteIMG")[0].id = img.id;
                document.getElementsByClassName("deleteIMG")[0].onclick = function () {
                    console.log("delete " + this.id);
                    xhr.open("GET", "http://localhost:4242/deleteMosaicAndBasic?delete=" + this.id);
                    xhr.send();
                };
            });
            downloadImg[i].addEventListener("click", function () {
                console.log(img.src);
            });
            infoImg[i].addEventListener("click", function () {
                infoModalImg.style.display = "block";
                infoModalText.innerHTML = "<br /> Image Information: " + "<br /> <br /> " + this.getAttribute('title');
            })
        });
        if (document.body.contains(document.getElementsByClassName("close")[1])) {
            var span = document.getElementsByClassName("close")[0];
            span.onclick = function () {
                modal.style.display = "none";
            }
            var span2 = document.getElementsByClassName("close")[1];
            span2.onclick = function () {
                infoModalImg.style.display = "none";
            }

        }



        window.addEventListener("click", function (event) {
            if (!event.target.matches('.dropdownOption')) {
                var dropdowns = document.getElementsByClassName("dropdownDelete");
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }

            switch (event.target) {
                case modal:
                    modal.style.display = "none";
                    break
                case infoModalImg:
                    infoModalImg.style.display = "none";
                    break
            }
        });
    }

    window.addEventListener("click", function (event) {
        if (event.target == popUP) {
            popUP.style.display = "none";
        }
    });

    function createLogin() {
        loadReg_log_popup("loginForm", "LOG IN", "userLogName", "userLogPass", "LOGIN_btn");
    }

    function createRegister() {
        loadReg_log_popup("registerForm", "SIGN UP", "userRegName", "userRegPass", "SIGNUP_btn");
    }

    function loadReg_log_popup(formID, formtitle, inputUseName, inputPassName, btn_id) {
        var superparent = createElementID('div', "formparentID")
        var registerForm = createElementID('form', formID)
        var divRegtitl = createElementID("div", "formtitle")
        var titleForm = document.createTextNode(formtitle);
        var divRegName = document.createElement("div");
        var inputRegName = createInput(inputUseName, "text", "", inputUseName + "ID")
        var divRegPW = document.createElement("div");
        var inputRegPW = createInput(inputPassName, "password", "", inputPassName + "ID")
        var divRegButton = document.createElement("div");
        var inputRegButton = createInput("", "button", formtitle, btn_id);
        document.getElementById("feedDIV").innerHTML = "";
        divRegtitl.append(titleForm);
        divRegName.append(document.createTextNode("Username/Email"), inputRegName);
        divRegPW.append(document.createTextNode("Password"), inputRegPW);
        divRegButton.append(inputRegButton);
        registerForm.append(divRegtitl, divRegName, divRegPW, divRegButton);
        var nextarrow = document.createElement('div');
        nextarrow.setAttribute("class", "next round");
        if (formtitle == "LOG IN") {
            superparent.append(registerForm);
            nextarrow.appendChild(document.createTextNode("›"));
            nextarrow.setAttribute("id", "arrowToLogin");
            nextarrow.addEventListener("click", function () {
                createRegister();
            });
            inputRegButton.addEventListener("click", function () {
                console.log("log in")
                var formData = new FormData(document.getElementById("loginForm"));
                xhr.open('POST', 'http://localhost:4242/login');
                xhr.send(formData);
            });
            superparent.appendChild(nextarrow);
            document.getElementById("pupup-contentID").setAttribute("style", "padding: 20px 10px 20px 20px;");
        } else {
            nextarrow.appendChild(document.createTextNode("‹"));
            nextarrow.setAttribute("id", "arrowToLogin");
            nextarrow.addEventListener("click", function () {
                createLogin();
            });
            inputRegButton.addEventListener("click", function () {
                console.log("Sign UP")
                var formData = new FormData(document.getElementById("registerForm"));
                xhr3.open('POST', 'http://localhost:4242/register');
                xhr3.send(formData);
            });
            superparent.appendChild(nextarrow);
            superparent.append(registerForm);
            document.getElementById("pupup-contentID").setAttribute("style", "padding: 20px 20px 20px 0px;");
        }
        popupContent.replaceChild(superparent, popupContent.childNodes[4]);
    }

    function createElementID(element, idname) {
        var el = document.createElement(element);
        el.setAttribute("id", idname);
        return el;
    }

    function createInput(name, type, value, id) {
        var input = document.createElement('input');
        input.setAttribute("name", name);
        input.setAttribute("type", type);
        input.setAttribute("value", value);
        input.setAttribute("id", id);
        return input;
    }

});