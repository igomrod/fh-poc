//function funfun(){window.File&&window.FileReader&&window.FileList&&window.Blob||alert("The File APIs are not fully supported in this browser"),document.getElementById("files").addEventListener("change",handleFileSelect,!1),document.getElementById("text2").value=decodeURI(t2)}var t1,t2=encodeURI(" Aniversario TEGRA Cybersecurity Center Fecha Miércoles 19 de j unio de 2019 Localización Santiago de Compostela - Casa Grande do Pozo ( Rúa do Vilar, 19, Santiago de Compostela. 15705, A Coruña ) https://goo.gl/maps/Cqjz8bAHvoXP6HcK7 Programa 10 : 00 h : Recepción , registro y café Durante la recepción estar án disponibles unos stands demostrativos con tecnologías innovadoras . 10:30 h : Apertura de la jornada Luis Pérez Freire Director General de Gradiant P edro Pablo Pérez Garcia Vicepresidente de Seguridad de Telefónica y CEO de ElevenPaths 1 1: 00 h : Aniversario de TEGRA: Logros, hitos y futuro Juan Elosua Tomé – Director TEGRA – ElevenPaths Juan González Martínez – Director TEGR A – Gradiant 11 :15 h : Mesa redonda “ Fugas de información: Impacto, control y mitigación ” Moderado r : Fernando Jiménez Míguez – Gerente de Gradiant P onentes : Roberto Baratta Martínez Director de Prevención Pérdidas - Cont inuida d de Negoci o - Seguridad – ABANCA Carlos López Blanco Head of Digital Risk Office – Hijos de Rivera SAU Fernando Suarez Lorenzo Director del Área de Transparencia y Gobierno Abierto – Deputación de Ourense David González González Responsable de seguridad de información – Grupo COREN 1 2 : 15 h : “¿ Innovación para ayudar controlar y tener visibilidad de la información corporativa?” Jose Cascallana Arroyo – Equipo TEGRA Lilian A dkinson Orellana /D iego Pérez Vieites – Equipo TEGRA Roberto Anta Rodríguez – Equipo TEGRA Rafael Mart í nez Álvarez /Iván Gómez Rodr í guez – Equipo TEGRA 1 2 : 45 h : Keynote - Clausura Ignacio González Ubierna Subdirector de tecnologías de ciberseguridad – INCIBE 1 3: 15 h – 14:00h Cocktail Durante el cocktail estarán disponibles unos stands demostrativos con tecnologías innovadora s . ".replace(/\s\s+/g," "));function handleFileSelect(e){for(var n,a=e.target.files,t=new Array,o=[],s=0;n=a[s];s++)o.push("<li><strong>",escape(n.name),"</strong> (",n.type||"n/a",") - ",n.size," bytes, last modified: ",n.lastModifiedDate.toLocaleDateString(),"</li>"),t[s]=new FileReader,t[s].onload=function(e){var n=this.result;pdfjsLib.getDocument(n).then(function(e){for(var n,a=[],t=0;t<e._pdfInfo.numPages;t++)n=t+1,a.push(getPageText(n,e));Promise.all(a).then(function(e){for(var n=0,a="";n<e.length;n++)a+=e[n];fun_hash(a)})},function(e){console.error(e)})},t[s].readAsDataURL(n);document.getElementById("list").innerHTML="<ul>"+o.join("")+"</ul>"}function getPageText(e,n){return new Promise(function(a,t){n.getPage(e).then(function(e){e.getTextContent().then(function(e){for(var n=e.items,t="",o=0;o<n.length;o++){t+=n[o].str+" "}a(t)})})})}function fun_hash(e){t1=encodeURI(e.replace(/\s\s+/g," ")),document.getElementById("text1").value=decodeURI(t1);var n=sjcl.hash.sha256.hash(t1),a=sjcl.codec.hex.fromBits(n);document.getElementById("sha256_hash1").value=a;var t=sjcl.hash.sha256.hash(t2),o=sjcl.codec.hex.fromBits(t);document.getElementById("sha256_hash2").value=o,tick_img_src="/fh-poc/assets/images/tick.png",xicon_img_src="/fh-poc//assets/images/x-icon.png";var s='<img class="tick" src="'+tick_img_src+'">',i='<img class="x-icon" src="'+xicon_img_src+'">';document.getElementById("sha256_match").innerHTML=a==o?"<span>Cryptographic hashes (SHA-256): </span>"+s:"<span>Cryptographic hashes (SHA-256): </span>"+i;var r=ssdeep.digest(t1),d=ssdeep.digest(t2);document.getElementById("ssdeep_hash1").value=r,document.getElementById("ssdeep_hash2").value=d;var l=ssdeep.similarity(r,d);console.log(r),console.log(d),console.log(l),document.getElementById("filename_match").innerHTML="<span>Document names: </span>"+i;var c=Math.round(10*l)/10;document.getElementById("ssdeep_similarity").innerHTML=c>80?"<span>Fuzzy hashing (ssdeep): </span>"+c+s:"<span>Fuzzy hashing (ssdeep):  </span>"+c+i,console.log("T1: "+t1),console.log("T2: "+t1);var h=new Tlsh,u=new Tlsh;h.update(t1,t1.length+1),h.finale(),document.getElementById("tlsh_hash1").value=h.hash(),u.update(t2,t2.length+1),u.finale(),document.getElementById("tlsh_hash2").value=u.hash();var g=h.totalDiff(u,!document.getElementById("tlsh_iglen").checked);document.getElementById("tlsh_diffh").innerHTML="TLSH diff = "+g;var m=Math.round(100*Math.exp(-Math.pow(g/40,2))*10)/10+"%";document.getElementById("tlsh_simil").innerHTML="TLSH similarity = "+m,Math.round(100*Math.exp(-Math.pow(g/40,2))*10)/10>80?document.getElementById("tlsh_simil").innerHTML="<span>Fuzzy Hash (tlsh): </span>"+s:document.getElementById("tlsh_simil").innerHTML="<span>Fuzzy Hash (tlsh): </span>"+i}
function funfun() {
    window.File && window.FileReader && window.FileList && window.Blob || alert("The File APIs are not fully supported in this browser"), document.getElementById("files").addEventListener("change", handleFileSelect, !1), document.getElementById("text2").value = decodeURI(t2)
}
var t1, t2 = encodeURI(" Aniversario TEGRA Cybersecurity Center Fecha Miércoles 19 de j unio de 2019 Localización Santiago de Compostela - Casa Grande do Pozo ( Rúa do Vilar, 19, Santiago de Compostela. 15705, A Coruña ) https://goo.gl/maps/Cqjz8bAHvoXP6HcK7 Programa 10 : 00 h : Recepción , registro y café Durante la recepción estar án disponibles unos stands demostrativos con tecnologías innovadoras . 10:30 h : Apertura de la jornada Luis Pérez Freire Director General de Gradiant P edro Pablo Pérez Garcia Vicepresidente de Seguridad de Telefónica y CEO de ElevenPaths 1 1: 00 h : Aniversario de TEGRA: Logros, hitos y futuro Juan Elosua Tomé – Director TEGRA – ElevenPaths Juan González Martínez – Director TEGR A – Gradiant 11 :15 h : Mesa redonda “ Fugas de información: Impacto, control y mitigación ” Moderado r : Fernando Jiménez Míguez – Gerente de Gradiant P onentes : Roberto Baratta Martínez Director de Prevención Pérdidas - Cont inuida d de Negoci o - Seguridad – ABANCA Carlos López Blanco Head of Digital Risk Office – Hijos de Rivera SAU Fernando Suarez Lorenzo Director del Área de Transparencia y Gobierno Abierto – Deputación de Ourense David González González Responsable de seguridad de información – Grupo COREN 1 2 : 15 h : “¿ Innovación para ayudar controlar y tener visibilidad de la información corporativa?” Jose Cascallana Arroyo – Equipo TEGRA Lilian A dkinson Orellana /D iego Pérez Vieites – Equipo TEGRA Roberto Anta Rodríguez – Equipo TEGRA Rafael Mart í nez Álvarez /Iván Gómez Rodr í guez – Equipo TEGRA 1 2 : 45 h : Keynote - Clausura Ignacio González Ubierna Subdirector de tecnologías de ciberseguridad – INCIBE 1 3: 15 h – 14:00h Cocktail Durante el cocktail estarán disponibles unos stands demostrativos con tecnologías innovadora s . ".replace(/\s\s+/g, " "));
var tick_img_src = "/fh-poc/assets/images/tick.png", xicon_img_src = "/fh-poc//assets/images/x-icon.png";
function handleFileSelect(e) {
    var s = '<img class="tick" src="' + tick_img_src + '">',
        i = '<img class="x-icon" src="' + xicon_img_src + '">';
    for (var n, a = e.target.files, t = new Array, o = [], s = 0; n = a[s]; s++) o.push("<li><strong id='filename'>", escape(n.name), "</strong> (", n.type || "n/a", ") - ", n.size, " bytes, last modified: ", n.lastModifiedDate.toLocaleDateString(), "</li>"), t[s] = new FileReader, t[s].onload = function(e) {
        var n = this.result;
        pdfjsLib.getDocument(n).then(function(e) {
            for (var n, a = [], t = 0; t < e._pdfInfo.numPages; t++) n = t + 1, a.push(getPageText(n, e));
            Promise.all(a).then(function(e) {
                for (var n = 0, a = ""; n < e.length; n++) a += e[n];
                fun_hash(a)
            })
        }, function(e) {
            console.error(e)
        })
    }, t[s].readAsDataURL(n);
    document.getElementById("list").innerHTML = "<ul>" + o.join("") + "</ul>"
}

function getPageText(e, n) {
    return new Promise(function(a, t) {
        n.getPage(e).then(function(e) {
            e.getTextContent().then(function(e) {
                for (var n = e.items, t = "", o = 0; o < n.length; o++) {
                    t += n[o].str + " "
                }
                a(t)
            })
        })
    })
}

function fun_hash(e) {
    t1 = encodeURI(e.replace(/\s\s+/g, " ")), document.getElementById("text1").value = decodeURI(t1);
    var n = sjcl.hash.sha256.hash(t1),
        a = sjcl.codec.hex.fromBits(n);
    document.getElementById("sha256_hash1").value = a;
    var t = sjcl.hash.sha256.hash(t2),
        o = sjcl.codec.hex.fromBits(t);
    document.getElementById("sha256_hash2").value = o;
    var s = '<img class="tick" src="' + tick_img_src + '">',
        i = '<img class="x-icon" src="' + xicon_img_src + '">';
    document.getElementById("sha256_match").innerHTML = a == o ? "<span>Cryptographic hashes (SHA-256): </span>" + s : "<span>Cryptographic hashes (SHA-256): </span>" + i;
    var r = ssdeep.digest(t1),
        d = ssdeep.digest(t2);
    document.getElementById("ssdeep_hash1").value = r, document.getElementById("ssdeep_hash2").value = d;
    var l = ssdeep.similarity(r, d);
    console.log(r), console.log(d), console.log(l);
    var c = Math.round(10 * l) / 10;
    document.getElementById("ssdeep_similarity").innerHTML = c > 80 ? "<span>Fuzzy hashing (ssdeep): </span>" + c + s : "<span>Fuzzy hashing (ssdeep):  </span>" + c + i, console.log("T1: " + t1), console.log("T2: " + t1);
    var h = new Tlsh,
        u = new Tlsh;
    h.update(t1, t1.length + 1), h.finale(), document.getElementById("tlsh_hash1").value = h.hash(), u.update(t2, t2.length + 1), u.finale(), document.getElementById("tlsh_hash2").value = u.hash();
    var g = h.totalDiff(u, !document.getElementById("tlsh_iglen").checked);
    document.getElementById("tlsh_diffh").innerHTML = "TLSH diff = " + g;
    var m = Math.round(100 * Math.exp(-Math.pow(g / 40, 2)) * 10) / 10 + "%";
    document.getElementById("tlsh_simil").innerHTML = "TLSH similarity = " + m, Math.round(100 * Math.exp(-Math.pow(g / 40, 2)) * 10) / 10 > 80 ? document.getElementById("tlsh_simil").innerHTML = "<span>Fuzzy Hash (tlsh): </span>" + s : document.getElementById("tlsh_simil").innerHTML = "<span>Fuzzy Hash (tlsh): </span>" + i
    if (document.getElementById("filename").innerHTML === "Programa_nacimiento_tegra.pdf") {document.getElementById("filename_match").innerHTML = "<span>Document names: </span>" + i}
    else {document.getElementById("filename_match").innerHTML = "<span>Document names: </span>" + s}
    

}
