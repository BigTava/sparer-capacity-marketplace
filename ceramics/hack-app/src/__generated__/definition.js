// This is an auto-generated file, do not edit manually
export const definition = {"models":{"BasicProfile":{"id":"kjzl6hvfrbw6c8bxrz5y2jm084fyz7x0wjptdmeych9d28t72t3po9u6f4wus47","accountRelation":{"type":"single"}},"Capacity3":{"id":"kjzl6hvfrbw6c55eaw7loemg3ly2vm8s1cs489epvzkqaa925mg3j9lnush4urv","accountRelation":{"type":"list"}},"Capacity2":{"id":"kjzl6hvfrbw6c9geoqim5hl56rgzrnoaqq13gag6pkl6g7z5fqe8w94ji70mw2h","accountRelation":{"type":"single"}},"Capacity":{"id":"kjzl6hvfrbw6cay5lnj0dnm1z2ue8vt1cso76efmcqh6m9j2xnuklj6p2nevpi7","accountRelation":{"type":"single"}},"Posts":{"id":"kjzl6hvfrbw6cb02zqirjbnlbqh0fsamft2mdyx7fn5vbmy0u42nzr3upi1ewr0","accountRelation":{"type":"list"}},"Following":{"id":"kjzl6hvfrbw6c8kz82vbeh7vetjvujcqly03xbcxhpt8phrnse8yyx5o0z5u4un","accountRelation":{"type":"list"}},"Supplier":{"id":"kjzl6hvfrbw6c6cx10zkssfr5tyab6ut96iu8p2gn1v795iy76z5ivhg0106we4","accountRelation":{"type":"list"}},"Order":{"id":"kjzl6hvfrbw6c8mdq0ts05crnibtdjoapouxb01op4y5h3fjr8g4btuz5usxy2u","accountRelation":{"type":"list"}}},"objects":{"BasicProfile":{"name":{"type":"string","required":true},"emoji":{"type":"string","required":false},"gender":{"type":"string","required":false},"username":{"type":"string","required":true},"description":{"type":"string","required":false},"posts":{"type":"view","viewType":"relation","relation":{"source":"queryConnection","model":"kjzl6hvfrbw6c8bxrz5y2jm084fyz7x0wjptdmeych9d28t72t3po9u6f4wus47","property":"profileId"}}},"Capacity3":{"capacity":{"type":"integer","required":false},"material":{"type":"string","required":false},"lead_time":{"type":"integer","required":false},"tolerance":{"type":"float","required":false},"supplier_id":{"type":"string","required":false},"product_type":{"type":"string","required":false}},"Capacity2":{"capacity":{"type":"integer","required":false},"material":{"type":"string","required":false},"lead_time":{"type":"integer","required":false},"tolerance":{"type":"float","required":false},"product_type":{"type":"string","required":false}},"Capacity":{"displayName":{"type":"string","required":true}},"Posts":{"body":{"type":"string","required":true},"edited":{"type":"datetime","required":false},"created":{"type":"datetime","required":true},"profileId":{"type":"streamid","required":true},"profile":{"type":"view","viewType":"relation","relation":{"source":"document","model":"kjzl6hvfrbw6c8bxrz5y2jm084fyz7x0wjptdmeych9d28t72t3po9u6f4wus47","property":"profileId"}}},"Following":{"profileId":{"type":"streamid","required":true},"profile":{"type":"view","viewType":"relation","relation":{"source":"document","model":"kjzl6hvfrbw6c8bxrz5y2jm084fyz7x0wjptdmeych9d28t72t3po9u6f4wus47","property":"profileId"}}},"Supplier":{"location":{"type":"string","required":false},"supplier_id":{"type":"string","required":false},"supplier_name":{"type":"string","required":false}},"Order":{"material":{"type":"string","required":false},"capacity_id":{"type":"string","required":false},"supplier_id":{"type":"string","required":false},"product_name":{"type":"string","required":false}}},"enums":{},"accountData":{"basicProfile":{"type":"node","name":"BasicProfile"},"capacity3List":{"type":"connection","name":"Capacity3"},"capacity2List":{"type":"connection","name":"Capacity2"},"capacity2":{"type":"node","name":"Capacity2"},"capacity":{"type":"node","name":"Capacity"},"postsList":{"type":"connection","name":"Posts"},"followingList":{"type":"connection","name":"Following"},"supplierList":{"type":"connection","name":"Supplier"},"orderList":{"type":"connection","name":"Order"}}}