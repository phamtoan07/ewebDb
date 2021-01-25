/*insert cmd collection*/
/*cmdmenu:
   {
     cmdid: <string>,
     prid: <string>,
     lev: <number>,
     last: <boolean>,
     menutype: <string>, [O,A,M]
     modcode: <string>, [SU-System user, SA-System Admin]
     objname: <string>,
     cmdname: <string>,
     authcode: <string>,             
     tltxcd: <string>,          
     mnviewcode: <string>,
	 display: <boolean>
*/
db.cmdmenu.insert ( { cmdid: "000001", prid: null, lev: 1, last: true, menutype: null, modcode : "SU", objname:"HOME", cmdname:"home.user.home", authcode: null, tltxcd: null, mnviewcode:"Home",display: true } );
db.cmdmenu.insert( { cmdid: "000002", prid: "", lev: 1, last: false, menutype: "", modcode : "SU", objname:"CATEGORY", cmdname:"home.user.category", authcode:"", tltxcd:"", mnviewcode:"Category",display: true } );
db.cmdmenu.insert( { cmdid: "000003", prid: "", lev: 1, last: false, menutype: "", modcode : "SU", objname:"HOT", cmdname:"home.user.hot", authcode:"", tltxcd:"", mnviewcode:"",display: true } );
db.cmdmenu.insert( { cmdid: "000004", prid: "", lev: 1, last: false, menutype: "", modcode : "SU", objname:"NEW", cmdname:"home.user.new", authcode:"", tltxcd:"", mnviewcode:"",display: true  } );
db.cmdmenu.insert( { cmdid: "000005", prid: "", lev: 1, last: false, menutype: "", modcode : "SU", objname:"DISCOUNT", cmdname:"home.user.discount", authcode:"", tltxcd:"", mnviewcode:"",display: true  } );
db.cmdmenu.insert( { cmdid: "000006", prid: "", lev: 1, last: false, menutype: "", modcode : "SU", objname:"ORDER", cmdname:"home.user.order", authcode:"", tltxcd:"", mnviewcode:"",display: true  } );
db.cmdmenu.insert( { cmdid: "000007", prid: "", lev: 1, last: false, menutype: "", modcode : "SU", objname:"POST", cmdname:"home.user.post", authcode:"", tltxcd:"", mnviewcode:"",display: true } );
db.cmdmenu.insert( { cmdid: "000008", prid: "", lev: 1, last: false, menutype: "", modcode : "SU", objname:"ABOUT", cmdname:"home.user.about", authcode:"", tltxcd:"", mnviewcode:"",display: true  } );