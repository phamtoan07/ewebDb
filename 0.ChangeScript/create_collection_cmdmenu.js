db.createCollection( "cmdmenu", 
{
   validator: { $jsonSchema: {
      bsonType: "object",
      required: [ "cmdid", "lev", "objname", "cmdname"  ],
      properties: {
         cmdid: {
            bsonType: "string",
            description: "cmdmenu.cmdid.required"
         },
         lev: {
            bsonType : "string",
            description: "cmdmenu.lev.required"
         },
		 objname: {
            bsonType : "string",
            description: "cmdmenu.objname.required"
         },
		 cmdname: {
            bsonType : "string",
            description: "cmdmenu.cmdname.required"
         }
      }
   } }
} );

/*
db.cmdmenu.drop()
db.createCollection( "cmdmenu",
   {
     cmdid: <string>,
     prid: <string>,
     lev: <number>,
     last: <boolean>,
     menutype: <string>,
     modcode: <string>,
     objname: <string>,
     cmdname: <string>,
     authcode: <string>,             
     tltxcd: <string>,          
     mnviewcode: <string>,
	 display: <boolean>
   }
);
*/