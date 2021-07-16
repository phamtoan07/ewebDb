/*insert cmdmenu collection*/
/*cmdmenu:
   {
     cmdid: <string>,
     prid: <string>,
     lev: <number>,
     last: <boolean>,
     menutype: <string>, [O,A,M]
     modcode: <string>, [SY-System, SA-System Admin]
     objname: <string>,
     cmdname: <string>,
     authcode: <string>,             
     tltxcd: <string>,          
     mnviewcode: <string>,
	 display: <boolean>
   }
*/
db.cmdmenu.remove( { } );
db.cmdmenu.insert ( { cmdid: "010000", prid: null, lev: 1, last: true, menutype: null, modcode : "SY", objname:"HOME", cmdname:"home.user.home", authcode: null, tltxcd: null, mnviewcode:"",display: true, extended: false} );
db.cmdmenu.insert( { cmdid: "020000", prid: "", lev: 1, last: false, menutype: "", modcode : "SY", objname:"CATEGORY", cmdname:"home.user.category", authcode:"", tltxcd:"", mnviewcode:"",display: true, extended: false } );

db.cmdmenu.insert( { cmdid: "020001", prid: "020000", lev: 2, last: true, menutype: "", modcode : "SY", objname:"CHILDCATEGORY1", cmdname:"home.user.category 1", authcode:"", tltxcd:"", mnviewcode:"Category",display: true, extended: false } );
db.cmdmenu.insert( { cmdid: "020001", prid: "020000", lev: 2, last: true, menutype: "", modcode : "SY", objname:"CHILDCATEGORY2", cmdname:"home.user.category 2", authcode:"", tltxcd:"", mnviewcode:"Category",display: true, extended: false } );

db.cmdmenu.insert( { cmdid: "030000", prid: "", lev: 1, last: false, menutype: "", modcode : "SY", objname:"HOT", cmdname:"home.user.hot", authcode:"", tltxcd:"", mnviewcode:"",display: true, extended: false } );

db.cmdmenu.insert( { cmdid: "030001", prid: "030000", lev: 2, last: true, menutype: "", modcode : "SY", objname:"CHILDHOT1", cmdname:"home.user.hot 1", authcode:"", tltxcd:"", mnviewcode:"",display: true, extended: false } );

db.cmdmenu.insert( { cmdid: "000004", prid: "", lev: 1, last: false, menutype: "", modcode : "SY", objname:"NEW", cmdname:"home.user.new", authcode:"", tltxcd:"", mnviewcode:"",display: true, extended: false  } );

db.cmdmenu.insert( { cmdid: "050000", prid: "", lev: 1, last: false, menutype: "", modcode : "SY", objname:"DISCOUNT", cmdname:"home.user.discount", authcode:"", tltxcd:"", mnviewcode:"",display: true, extended: false  } );

db.cmdmenu.insert( { cmdid: "060000", prid: "", lev: 1, last: false, menutype: "", modcode : "SY", objname:"ORDER", cmdname:"home.user.order", authcode:"", tltxcd:"", mnviewcode:"",display: true, extended: false  } );

db.cmdmenu.insert( { cmdid: "070000", prid: "", lev: 1, last: false, menutype: "", modcode : "SY", objname:"POST", cmdname:"home.user.post", authcode:"", tltxcd:"", mnviewcode:"",display: false, extended: false } );

db.cmdmenu.insert( { cmdid: "080000", prid: "", lev: 1, last: false, menutype: "", modcode : "SY", objname:"ABOUT", cmdname:"home.user.about", authcode:"", tltxcd:"", mnviewcode:"",display: true, extended: true  } );

db.cmdmenu.insert( { cmdid: "090000", prid: "", lev: 1, last: false, menutype: "", modcode : "SY", objname:"CONTACT", cmdname:"home.user.contact", authcode:"", tltxcd:"", mnviewcode:"",display: true, extended: true } );

db.cmdmenu.insert( { cmdid: "11000", prid: "", lev: 1, last: false, menutype: "", modcode : "SY", objname:"BRANCH", cmdname:"home.user.branch", authcode:"", tltxcd:"", mnviewcode:"",display: true, extended: true } );
