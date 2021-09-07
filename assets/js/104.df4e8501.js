(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{632:function(c,e,t){"use strict";t.r(e);var d=t(1),o=Object(d.a)({},(function(){var c=this,e=c.$createElement,t=c._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":c.$parent.slotKey}},[t("h1",{attrs:{id:"list-posts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#list-posts"}},[c._v("#")]),c._v(" List posts")]),c._v(" "),t("p",[c._v("To list created posts you use the "),t("code",[c._v("blogd query blog list-post")]),c._v(" and "),t("code",[c._v("blogd query blog get-post")]),c._v(" commands. The "),t("code",[c._v("list-post")]),c._v(" and "),t("code",[c._v("get-post")]),c._v(" subcommands haven’t been defined yet, so let’s do it now. "),t("a",{attrs:{href:"https://docs.cosmos.network/master/building-modules/querier.html",target:"_blank",rel:"noopener noreferrer"}},[c._v("Query commands"),t("OutboundLink")],1),c._v(" from the CLI are handled by "),t("code",[c._v("query.go")]),c._v(".")]),c._v(" "),t("p",[c._v("First we define our proto files, in "),t("code",[c._v("proto/blog")])]),c._v(" "),t("h2",{attrs:{id:"add-the-query-proto-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add-the-query-proto-file"}},[c._v("#")]),c._v(" Add the Query Proto File")]),c._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"proto",base64:"Ly8gcHJvdG8vYmxvZy9xdWVyeS5wcm90bwpzeW50YXggPSAmcXVvdDtwcm90bzMmcXVvdDs7CnBhY2thZ2UgZXhhbXBsZS5ibG9nLmJsb2c7CgppbXBvcnQgJnF1b3Q7Z29vZ2xlL2FwaS9hbm5vdGF0aW9ucy5wcm90byZxdW90OzsKaW1wb3J0ICZxdW90O2Nvc21vcy9iYXNlL3F1ZXJ5L3YxYmV0YTEvcGFnaW5hdGlvbi5wcm90byZxdW90OzsKLy8gdGhpcyBsaW5lIGlzIHVzZWQgYnkgc3RhcnBvcnQgc2NhZmZvbGRpbmcgIyAxCmltcG9ydCAmcXVvdDtibG9nL3Bvc3QucHJvdG8mcXVvdDs7CgpvcHRpb24gZ29fcGFja2FnZSA9ICZxdW90O2dpdGh1Yi5jb20vZXhhbXBsZS9ibG9nL3gvYmxvZy90eXBlcyZxdW90OzsKCi8vIFF1ZXJ5IGRlZmluZXMgdGhlIGdSUEMgcXVlcmllciBzZXJ2aWNlLgpzZXJ2aWNlIFF1ZXJ5IHsKCS8vIHRoaXMgbGluZSBpcyB1c2VkIGJ5IHN0YXJwb3J0IHNjYWZmb2xkaW5nICMgMgoJcnBjIFBvc3QoUXVlcnlHZXRQb3N0UmVxdWVzdCkgcmV0dXJucyAoUXVlcnlHZXRQb3N0UmVzcG9uc2UpIHsKCQlvcHRpb24gKGdvb2dsZS5hcGkuaHR0cCkuZ2V0ID0gJnF1b3Q7L2V4YW1wbGUvYmxvZy9ibG9nL3Bvc3Qve2lkfSZxdW90OzsKCX0KCXJwYyBQb3N0QWxsKFF1ZXJ5QWxsUG9zdFJlcXVlc3QpIHJldHVybnMgKFF1ZXJ5QWxsUG9zdFJlc3BvbnNlKSB7CgkJb3B0aW9uIChnb29nbGUuYXBpLmh0dHApLmdldCA9ICZxdW90Oy9leGFtcGxlL2Jsb2cvYmxvZy9wb3N0JnF1b3Q7OwoJfQp9CgovLyB0aGlzIGxpbmUgaXMgdXNlZCBieSBzdGFycG9ydCBzY2FmZm9sZGluZyAjIDMKbWVzc2FnZSBRdWVyeUdldFBvc3RSZXF1ZXN0IHsKCXN0cmluZyBpZCA9IDE7Cn0KCm1lc3NhZ2UgUXVlcnlHZXRQb3N0UmVzcG9uc2UgewoJUG9zdCBQb3N0ID0gMTsKfQoKbWVzc2FnZSBRdWVyeUFsbFBvc3RSZXF1ZXN0IHsKCWNvc21vcy5iYXNlLnF1ZXJ5LnYxYmV0YTEuUGFnZVJlcXVlc3QgcGFnaW5hdGlvbiA9IDE7Cn0KCm1lc3NhZ2UgUXVlcnlBbGxQb3N0UmVzcG9uc2UgewoJcmVwZWF0ZWQgUG9zdCBQb3N0ID0gMTsKCWNvc21vcy5iYXNlLnF1ZXJ5LnYxYmV0YTEuUGFnZVJlc3BvbnNlIHBhZ2luYXRpb24gPSAyOwp9Cg=="}}),c._v(" "),t("p",[c._v("In our proto file you define the structure of the API endpoint, as well as your request and response structure of the post.")]),c._v(" "),t("h2",{attrs:{id:"edit-the-query-functions-in-the-cli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#edit-the-query-functions-in-the-cli"}},[c._v("#")]),c._v(" Edit the Query Functions in the CLI")]),c._v(" "),t("p",[c._v("Function "),t("code",[c._v("GetQueryCmd")]),c._v(" is used for creating a list of "),t("code",[c._v("query")]),c._v(" subcommands, it should already be defined. Edit the function to add "),t("code",[c._v("CmdListPost")]),c._v(" and "),t("code",[c._v("CmdShowPost")]),c._v(" as a subcommand:")]),c._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8geC9ibG9nL2NsaWVudC9jbGkvcXVlcnkuZ28KCQoJLy8gdGhpcyBsaW5lIGlzIHVzZWQgYnkgc3RhcnBvcnQgc2NhZmZvbGRpbmcgIyAxCgljbWQuQWRkQ29tbWFuZChDbWRMaXN0UG9zdCgpKQoJY21kLkFkZENvbW1hbmQoQ21kU2hvd1Bvc3QoKSkK"}}),c._v(" "),t("p",[c._v("Now define "),t("code",[c._v("CmdListPost")]),c._v(" in a new "),t("code",[c._v("queryPost.go")]),c._v(" file:")]),c._v(" "),t("h2",{attrs:{id:"add-the-query-post-to-the-cli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add-the-query-post-to-the-cli"}},[c._v("#")]),c._v(" Add the Query Post to the CLI")]),c._v(" "),t("p",[c._v("Create the "),t("code",[c._v("x/blog/client/cli/queryPost.go")]),c._v(" file.")]),c._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8geC9ibG9nL2NsaWVudC9jbGkvcXVlcnlQb3N0LmdvCnBhY2thZ2UgY2xpCgppbXBvcnQgKAoJJnF1b3Q7Y29udGV4dCZxdW90OwoKCSZxdW90O2dpdGh1Yi5jb20vc3BmMTMvY29icmEmcXVvdDsKCgkmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL2NsaWVudCZxdW90OwoJJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay9jbGllbnQvZmxhZ3MmcXVvdDsKCSZxdW90O2dpdGh1Yi5jb20vZXhhbXBsZS9ibG9nL3gvYmxvZy90eXBlcyZxdW90OwopCgpmdW5jIENtZExpc3RQb3N0KCkgKmNvYnJhLkNvbW1hbmQgewoJY21kIDo9ICZhbXA7Y29icmEuQ29tbWFuZHsKCQlVc2U6ICAgJnF1b3Q7bGlzdC1wb3N0JnF1b3Q7LAoJCVNob3J0OiAmcXVvdDtsaXN0IGFsbCBwb3N0JnF1b3Q7LAoJCVJ1bkU6IGZ1bmMoY21kICpjb2JyYS5Db21tYW5kLCBhcmdzIFtdc3RyaW5nKSBlcnJvciB7CgkJCWNsaWVudEN0eCwgZXJyIDo9IGNsaWVudC5HZXRDbGllbnRUeENvbnRleHQoY21kKQoJCQlpZiBlcnIgIT0gbmlsIHsKCQkJCXJldHVybiBlcnIKCQkJfQoKCQkJcGFnZVJlcSwgZXJyIDo9IGNsaWVudC5SZWFkUGFnZVJlcXVlc3QoY21kLkZsYWdzKCkpCgkJCWlmIGVyciAhPSBuaWwgewoJCQkJcmV0dXJuIGVycgoJCQl9CgoJCQlxdWVyeUNsaWVudCA6PSB0eXBlcy5OZXdRdWVyeUNsaWVudChjbGllbnRDdHgpCgoJCQlwYXJhbXMgOj0gJmFtcDt0eXBlcy5RdWVyeUFsbFBvc3RSZXF1ZXN0ewoJCQkJUGFnaW5hdGlvbjogcGFnZVJlcSwKCQkJfQoKCQkJcmVzLCBlcnIgOj0gcXVlcnlDbGllbnQuUG9zdEFsbChjb250ZXh0LkJhY2tncm91bmQoKSwgcGFyYW1zKQoJCQlpZiBlcnIgIT0gbmlsIHsKCQkJCXJldHVybiBlcnIKCQkJfQoKCQkJcmV0dXJuIGNsaWVudEN0eC5QcmludFByb3RvKHJlcykKCQl9LAoJfQoKCWZsYWdzLkFkZFF1ZXJ5RmxhZ3NUb0NtZChjbWQpCgoJcmV0dXJuIGNtZAp9CgpmdW5jIENtZFNob3dQb3N0KCkgKmNvYnJhLkNvbW1hbmQgewoJY21kIDo9ICZhbXA7Y29icmEuQ29tbWFuZHsKCQlVc2U6ICAgJnF1b3Q7c2hvdy1wb3N0IFtpZF0mcXVvdDssCgkJU2hvcnQ6ICZxdW90O3Nob3dzIGEgcG9zdCZxdW90OywKCQlBcmdzOiAgY29icmEuRXhhY3RBcmdzKDEpLAoJCVJ1bkU6IGZ1bmMoY21kICpjb2JyYS5Db21tYW5kLCBhcmdzIFtdc3RyaW5nKSBlcnJvciB7CgkJCWNsaWVudEN0eCwgZXJyIDo9IGNsaWVudC5HZXRDbGllbnRUeENvbnRleHQoY21kKQoJCQlpZiBlcnIgIT0gbmlsIHsKCQkJCXJldHVybiBlcnIKCQkJfQoKCQkJcXVlcnlDbGllbnQgOj0gdHlwZXMuTmV3UXVlcnlDbGllbnQoY2xpZW50Q3R4KQoKCQkJcGFyYW1zIDo9ICZhbXA7dHlwZXMuUXVlcnlHZXRQb3N0UmVxdWVzdHsKCQkJCUlkOiBhcmdzWzBdLAoJCQl9CgoJCQlyZXMsIGVyciA6PSBxdWVyeUNsaWVudC5Qb3N0KGNvbnRleHQuQmFja2dyb3VuZCgpLCBwYXJhbXMpCgkJCWlmIGVyciAhPSBuaWwgewoJCQkJcmV0dXJuIGVycgoJCQl9CgoJCQlyZXR1cm4gY2xpZW50Q3R4LlByaW50UHJvdG8ocmVzKSAKCQl9LAoJfQoKCWZsYWdzLkFkZFF1ZXJ5RmxhZ3NUb0NtZChjbWQpCgoJcmV0dXJuIGNtZAp9Cg=="}}),c._v(" "),t("p",[t("code",[c._v("CmdListPost")]),c._v(" and "),t("code",[c._v("CmdShowPost")]),c._v(" run an "),t("a",{attrs:{href:"https://docs.tendermint.com/master/spec/abci/",target:"_blank",rel:"noopener noreferrer"}},[c._v("ABCI"),t("OutboundLink")],1),c._v(" query to fetch the data, unmarshals it back form binary to JSON and returns it to the console. ABCI is an interface between your app and Tendermint (a program responsible for replicating the state across machines). ABCI queries look like paths on a hierarchical filesystem. In our case, the query is "),t("code",[c._v("custom/blog/list-post")]),c._v(". Before you continue, you need to define "),t("code",[c._v("QueryListPost")]),c._v(".")]),c._v(" "),t("h2",{attrs:{id:"add-the-two-query-commands-to-the-types"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add-the-two-query-commands-to-the-types"}},[c._v("#")]),c._v(" Add the Two Query Commands to the Types")]),c._v(" "),t("p",[c._v("Define a "),t("code",[c._v("QueryListPost")]),c._v(" in a new file "),t("code",[c._v("blog/types/query.go")]),c._v(" that will be used later on to dispatch query requests:")]),c._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8geC9ibG9nL3R5cGVzL3F1ZXJ5LmdvCnBhY2thZ2UgdHlwZXMKCmNvbnN0ICgKCVF1ZXJ5R2V0UG9zdCAgPSAmcXVvdDtnZXQtcG9zdCZxdW90OwoJUXVlcnlMaXN0UG9zdCA9ICZxdW90O2xpc3QtcG9zdCZxdW90OwopCgo="}}),c._v(" "),t("h2",{attrs:{id:"add-the-query-functions-to-the-keeper"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add-the-query-functions-to-the-keeper"}},[c._v("#")]),c._v(" Add the Query Functions to the Keeper")]),c._v(" "),t("p",[t("code",[c._v("NewQuerier")]),c._v(" acts as a dispatcher for query functions, it should already be defined. Modify the switch statement to include "),t("code",[c._v("listPost")]),c._v(". Create the "),t("code",[c._v("x/blog/keeper/query.go")]),c._v(" file:")]),c._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8geC9ibG9nL2tlZXBlci9xdWVyeS5nbwpwYWNrYWdlIGtlZXBlcgoKaW1wb3J0ICgKCS8vIHRoaXMgbGluZSBpcyB1c2VkIGJ5IHN0YXJwb3J0IHNjYWZmb2xkaW5nICMgMQoJJnF1b3Q7Z2l0aHViLmNvbS9leGFtcGxlL2Jsb2cveC9ibG9nL3R5cGVzJnF1b3Q7CgoJJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay9jb2RlYyZxdW90OwoJc2RrICZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdHlwZXMmcXVvdDsKCXNka2Vycm9ycyAmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3R5cGVzL2Vycm9ycyZxdW90OwoKCWFiY2kgJnF1b3Q7Z2l0aHViLmNvbS90ZW5kZXJtaW50L3RlbmRlcm1pbnQvYWJjaS90eXBlcyZxdW90OwopCgpmdW5jIE5ld1F1ZXJpZXIoayBLZWVwZXIsIGxlZ2FjeVF1ZXJpZXJDZGMgKmNvZGVjLkxlZ2FjeUFtaW5vKSBzZGsuUXVlcmllciB7CglyZXR1cm4gZnVuYyhjdHggc2RrLkNvbnRleHQsIHBhdGggW11zdHJpbmcsIHJlcSBhYmNpLlJlcXVlc3RRdWVyeSkgKFtdYnl0ZSwgZXJyb3IpIHsKCQl2YXIgKAoJCQlyZXMgW11ieXRlCgkJCWVyciBlcnJvcgoJCSkKCgkJc3dpdGNoIHBhdGhbMF0gewoJCWNhc2UgdHlwZXMuUXVlcnlHZXRQb3N0OgoJCQlyZXR1cm4gZ2V0UG9zdChjdHgsIHBhdGhbMV0sIGssIGxlZ2FjeVF1ZXJpZXJDZGMpCgoJCWNhc2UgdHlwZXMuUXVlcnlMaXN0UG9zdDoKCQkJcmV0dXJuIGxpc3RQb3N0KGN0eCwgaywgbGVnYWN5UXVlcmllckNkYykKCQlkZWZhdWx0OgoJCQllcnIgPSBzZGtlcnJvcnMuV3JhcGYoc2RrZXJyb3JzLkVyclVua25vd25SZXF1ZXN0LCAmcXVvdDt1bmtub3duICVzIHF1ZXJ5IGVuZHBvaW50OiAlcyZxdW90OywgdHlwZXMuTW9kdWxlTmFtZSwgcGF0aFswXSkKCQl9CgoJCXJldHVybiByZXMsIGVycgoJfQp9Cg=="}}),c._v(" "),t("p",[c._v("Next, define "),t("code",[c._v("listPost")]),c._v(":")]),c._v(" "),t("h3",{attrs:{id:"add-the-query-post-functions-to-the-keeper"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add-the-query-post-functions-to-the-keeper"}},[c._v("#")]),c._v(" Add the Query Post Functions to the Keeper")]),c._v(" "),t("p",[c._v("Create a new file "),t("code",[c._v("query_post.go")]),c._v(" in the "),t("code",[c._v("keeper/")]),c._v(" directory")]),c._v(" "),t("p",[c._v("Make sure to add the codec to the previous import and add the "),t("code",[c._v("listPost")]),c._v(" and "),t("code",[c._v("getPost")]),c._v(" function in a new file called "),t("code",[c._v("query_post.go")]),c._v(" in our keeper.")]),c._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8geC9ibG9nL2tlZXBlci9xdWVyeV9wb3N0LmdvCnBhY2thZ2Uga2VlcGVyCgppbXBvcnQgKAoJJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay9jb2RlYyZxdW90OwoJc2RrICZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdHlwZXMmcXVvdDsKCXNka2Vycm9ycyAmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3R5cGVzL2Vycm9ycyZxdW90OwopCgpmdW5jIGxpc3RQb3N0KGN0eCBzZGsuQ29udGV4dCwga2VlcGVyIEtlZXBlciwgbGVnYWN5UXVlcmllckNkYyAqY29kZWMuTGVnYWN5QW1pbm8pIChbXWJ5dGUsIGVycm9yKSB7Cgltc2dzIDo9IGtlZXBlci5HZXRBbGxQb3N0KGN0eCkKCglieiwgZXJyIDo9IGNvZGVjLk1hcnNoYWxKU09OSW5kZW50KGxlZ2FjeVF1ZXJpZXJDZGMsIG1zZ3MpCglpZiBlcnIgIT0gbmlsIHsKCQlyZXR1cm4gbmlsLCBzZGtlcnJvcnMuV3JhcChzZGtlcnJvcnMuRXJySlNPTk1hcnNoYWwsIGVyci5FcnJvcigpKQoJfQoKCXJldHVybiBieiwgbmlsCn0KCmZ1bmMgZ2V0UG9zdChjdHggc2RrLkNvbnRleHQsIGlkIHN0cmluZywga2VlcGVyIEtlZXBlciwgbGVnYWN5UXVlcmllckNkYyAqY29kZWMuTGVnYWN5QW1pbm8pIChbXWJ5dGUsIGVycm9yKSB7Cgltc2cgOj0ga2VlcGVyLkdldFBvc3QoY3R4LCBpZCkKCglieiwgZXJyIDo9IGNvZGVjLk1hcnNoYWxKU09OSW5kZW50KGxlZ2FjeVF1ZXJpZXJDZGMsIG1zZykKCWlmIGVyciAhPSBuaWwgewoJCXJldHVybiBuaWwsIHNka2Vycm9ycy5XcmFwKHNka2Vycm9ycy5FcnJKU09OTWFyc2hhbCwgZXJyLkVycm9yKCkpCgl9CgoJcmV0dXJuIGJ6LCBuaWwKfQo="}}),c._v(" "),t("p",[c._v("In the keeper you also define the grpc of the queryPost function.")]),c._v(" "),t("h3",{attrs:{id:"add-grpc-functionality"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add-grpc-functionality"}},[c._v("#")]),c._v(" Add GRPC functionality")]),c._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8geC9ibG9jay9rZWVwZXIvZ3JwY19xdWVyeV9wb3N0LmdvCnBhY2thZ2Uga2VlcGVyCgppbXBvcnQgKAoJJnF1b3Q7Y29udGV4dCZxdW90OwoKCSZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvc3RvcmUvcHJlZml4JnF1b3Q7CglzZGsgJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay90eXBlcyZxdW90OwoJJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay90eXBlcy9xdWVyeSZxdW90OwoJJnF1b3Q7Z2l0aHViLmNvbS9leGFtcGxlL2Jsb2cveC9ibG9nL3R5cGVzJnF1b3Q7CgkmcXVvdDtnb29nbGUuZ29sYW5nLm9yZy9ncnBjL2NvZGVzJnF1b3Q7CgkmcXVvdDtnb29nbGUuZ29sYW5nLm9yZy9ncnBjL3N0YXR1cyZxdW90OwopCgpmdW5jIChrIEtlZXBlcikgUG9zdEFsbChjIGNvbnRleHQuQ29udGV4dCwgcmVxICp0eXBlcy5RdWVyeUFsbFBvc3RSZXF1ZXN0KSAoKnR5cGVzLlF1ZXJ5QWxsUG9zdFJlc3BvbnNlLCBlcnJvcikgewoJaWYgcmVxID09IG5pbCB7CgkJcmV0dXJuIG5pbCwgc3RhdHVzLkVycm9yKGNvZGVzLkludmFsaWRBcmd1bWVudCwgJnF1b3Q7aW52YWxpZCByZXF1ZXN0JnF1b3Q7KQoJfQoKCXZhciBwb3N0cyBbXSp0eXBlcy5Qb3N0CgljdHggOj0gc2RrLlVud3JhcFNES0NvbnRleHQoYykKCglzdG9yZSA6PSBjdHguS1ZTdG9yZShrLnN0b3JlS2V5KQoJcG9zdFN0b3JlIDo9IHByZWZpeC5OZXdTdG9yZShzdG9yZSwgdHlwZXMuS2V5UHJlZml4KHR5cGVzLlBvc3RLZXkpKQoKCXBhZ2VSZXMsIGVyciA6PSBxdWVyeS5QYWdpbmF0ZShwb3N0U3RvcmUsIHJlcS5QYWdpbmF0aW9uLCBmdW5jKGtleSBbXWJ5dGUsIHZhbHVlIFtdYnl0ZSkgZXJyb3IgewoJCXZhciBwb3N0IHR5cGVzLlBvc3QKCQlpZiBlcnIgOj0gay5jZGMuVW5tYXJzaGFsQmluYXJ5QmFyZSh2YWx1ZSwgJmFtcDtwb3N0KTsgZXJyICE9IG5pbCB7CgkJCXJldHVybiBlcnIKCQl9CgoJCXBvc3RzID0gYXBwZW5kKHBvc3RzLCAmYW1wO3Bvc3QpCgkJcmV0dXJuIG5pbAoJfSkKCglpZiBlcnIgIT0gbmlsIHsKCQlyZXR1cm4gbmlsLCBzdGF0dXMuRXJyb3IoY29kZXMuSW50ZXJuYWwsIGVyci5FcnJvcigpKQoJfQoKCXJldHVybiAmYW1wO3R5cGVzLlF1ZXJ5QWxsUG9zdFJlc3BvbnNle1Bvc3Q6IHBvc3RzLCBQYWdpbmF0aW9uOiBwYWdlUmVzfSwgbmlsCn0KCmZ1bmMgKGsgS2VlcGVyKSBQb3N0KGMgY29udGV4dC5Db250ZXh0LCByZXEgKnR5cGVzLlF1ZXJ5R2V0UG9zdFJlcXVlc3QpICgqdHlwZXMuUXVlcnlHZXRQb3N0UmVzcG9uc2UsIGVycm9yKSB7CglpZiByZXEgPT0gbmlsIHsKCQlyZXR1cm4gbmlsLCBzdGF0dXMuRXJyb3IoY29kZXMuSW52YWxpZEFyZ3VtZW50LCAmcXVvdDtpbnZhbGlkIHJlcXVlc3QmcXVvdDspCgl9CgoJdmFyIHBvc3QgdHlwZXMuUG9zdAoJY3R4IDo9IHNkay5VbndyYXBTREtDb250ZXh0KGMpCgoJc3RvcmUgOj0gcHJlZml4Lk5ld1N0b3JlKGN0eC5LVlN0b3JlKGsuc3RvcmVLZXkpLCB0eXBlcy5LZXlQcmVmaXgodHlwZXMuUG9zdEtleSkpCglrLmNkYy5NdXN0VW5tYXJzaGFsQmluYXJ5QmFyZShzdG9yZS5HZXQodHlwZXMuS2V5UHJlZml4KHR5cGVzLlBvc3RLZXkgKyByZXEuSWQpKSwgJmFtcDtwb3N0KQoKCXJldHVybiAmYW1wO3R5cGVzLlF1ZXJ5R2V0UG9zdFJlc3BvbnNle1Bvc3Q6ICZhbXA7cG9zdH0sIG5pbAp9Cg=="}}),c._v(" "),t("h3",{attrs:{id:"add-grpc-to-the-module-handler"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add-grpc-to-the-module-handler"}},[c._v("#")]),c._v(" Add GRPC to the Module Handler")]),c._v(" "),t("p",[c._v("You add the grpc query handler to your module.")]),c._v(" "),t("p",[c._v("Make sure to import "),t("code",[c._v("context")]),c._v(" and add the "),t("code",[c._v("RegisterGRPCGatewayRoutes")]),c._v(":")]),c._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8geC9ibG9nL21vZHVsZS5nbwppbXBvcnQgKAoJJnF1b3Q7Y29udGV4dCZxdW90OwoJLy8gLi4uIG90aGVyIGltcG9ydHMKKQo="}}),c._v(" "),t("p",[c._v("Search for the "),t("code",[c._v("RegisterGRPCGatewayRoutes")]),c._v(" function and add the "),t("code",[c._v("RegisterQueryHandlerClient")])]),c._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8geC9ibG9nL21vZHVsZS5nbwpmdW5jIChBcHBNb2R1bGVCYXNpYykgUmVnaXN0ZXJHUlBDR2F0ZXdheVJvdXRlcyhjbGllbnRDdHggY2xpZW50LkNvbnRleHQsIG11eCAqcnVudGltZS5TZXJ2ZU11eCkgewoJLy8gdGhpcyBsaW5lIGlzIHVzZWQgYnkgc3RhcnBvcnQgc2NhZmZvbGRpbmcgIyAyCgl0eXBlcy5SZWdpc3RlclF1ZXJ5SGFuZGxlckNsaWVudChjb250ZXh0LkJhY2tncm91bmQoKSwgbXV4LCB0eXBlcy5OZXdRdWVyeUNsaWVudChjbGllbnRDdHgpKQp9Cg=="}}),c._v(" "),t("p",[c._v("This function uses a prefix iterator to loop through all the keys with a given prefix (in our case "),t("code",[c._v("PostKey")]),c._v(" is "),t("code",[c._v('"Post-value-"')]),c._v("). You get values by key with "),t("code",[c._v("store.Get")]),c._v(" and appending them to "),t("code",[c._v("postList")]),c._v(". Finally, unmarshal bytes back to JSON and return the result to the console.")]),c._v(" "),t("p",[c._v("Now, you can see how it works. Run the following command to recompile your app, clear the data and relaunch the chain:")]),c._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c3RhcnBvcnQgY2hhaW4gc2VydmUK"}}),c._v(" "),t("p",[c._v("After the app has launched, open a different terminal window and create a post:")]),c._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"YmxvZ2QgdHggYmxvZyBjcmVhdGUtcG9zdCAnSGVsbG8hJyAnVGhpcyBpcyBteSBmaXJzdCBibG9nIHBvc3QuJyAtLWZyb209YWxpY2UK"}}),c._v(" "),t("p",[c._v("And confirm the transaction with (y).")]),c._v(" "),t("p",[c._v("Now run the query to see the post:")]),c._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"YmxvZ2QgcXVlcnkgYmxvZyBsaXN0LXBvc3QK"}}),c._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"UG9zdDoKLSBib2R5OiBUaGlzIGlzIG15IGZpcnN0IGJsb2cgcG9zdC4KICBjcmVhdG9yOiBjb3Ntb3MxZjlqdmhrdDh3ZTBtMG5rcTYzYTdycWEyd25maHU0d2FhcHBrM3EKICBpZDogJnF1b3Q7MCZxdW90OwogIHRpdGxlOiBIZWxsbyEKcGFnaW5hdGlvbjoKICBuZXh0X2tleTogbnVsbAogIHRvdGFsOiAmcXVvdDsxJnF1b3Q7Cg=="}}),c._v(" "),t("p",[c._v("That’s a newly created post along with your address and a unique ID. Try creating more posts and see the output.")]),c._v(" "),t("p",[c._v("You can also make "),t("a",{attrs:{href:"https://docs.tendermint.com/master/spec/abci/",target:"_blank",rel:"noopener noreferrer"}},[c._v("ABCI"),t("OutboundLink")],1),c._v(" queries from the browser:")]),c._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"url",base64:"aHR0cDovL2xvY2FsaG9zdDoyNjY1Ny9hYmNpX3F1ZXJ5P3BhdGg9JnF1b3Q7L2V4YW1wbGUuYmxvZy5ibG9nLlF1ZXJ5L1Bvc3RBbGwmcXVvdDsK"}}),c._v(" "),t("p",[c._v("The result of this query is a base64 encoded string inside "),t("code",[c._v("result.response.value")]),c._v(". You can decode it using a browser’s built in JavaScript console: "),t("code",[c._v('atob("WwogIHsKICAgICJjcmV...")')]),c._v(".")]),c._v(" "),t("h2",{attrs:{id:"known-errors"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#known-errors"}},[c._v("#")]),c._v(" Known Errors")]),c._v(" "),t("h3",{attrs:{id:"null"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#null"}},[c._v("#")]),c._v(" "),t("code",[c._v("null")])]),c._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"YmxvZ2QgcSBibG9nIGxpc3QtcG9zdApudWxsCg=="}}),c._v(" "),t("p",[c._v("This "),t("code",[c._v("null")]),c._v(" is actually not an error, but might be a bit confusing. If you've added a post and immediately issued "),t("code",[c._v("list-post")]),c._v(" subcommand, you may get a "),t("code",[c._v("null")]),c._v(". This happens because it takes several seconds to process the block. After a couple of seconds you should be able to see output of "),t("code",[c._v("list-post")]),c._v(" subcommand.")])],1)}),[],!1,null,null,null);e.default=o.exports}}]);