(function(global)
{
    var ajaxutils={};
    function getRequestObject()
    {
        if(window.XMLHttpRequest)
        {
            return (new XMLHttpRequest());
        
        }
        else{
            global.alert("not supported");
            return(null);
        }
    }
    var request=getRequestObject();
    ajaxutils.sendGetRequest=
    function(requesturl,responsehandler,isJsonResponse)
        {
            
            request.onreadystatechange=
            function() { 
                handleResponse(request, 
                               responseHandler,
                               isJsonResponse); 
              };
         
            request.open("GET",requestUrl,true);
            request.send(null);
        };
        function handleResponse(request,responsehandler,isJsonResponse)
        {
            if((request.readyState==4)&&(request.status==200))
            {
                if (isJsonResponse == undefined) {
                    isJsonResponse = true;
                  }
              
                  if (isJsonResponse) {
                    responseHandler(JSON.parse(request.responseText));
                  }
                  else {
                    responseHandler(request.responseText);
                  }
            }
        }
        global.$ajaxutils=ajaxutils;
    
})(window);