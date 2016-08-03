
<div class="animated fadeinup delay-1">
          <div class="container activity">
            <div class="vertical-line-spacer"></div>
            <h5 class="uppercase">Last Activities</h5>
            <div class="row">
              <div class="col s12">
               <% _(list).each(function(t,num) { %>
                    <div class="contact">
                        <% if(t.type == 'scan') { %>
                              <img alt="" src="img/ScanIcon.png">
                        <% }else if(t.type == 'landing' || t.type == 'balance'){ %>
                              <img alt="" src="img/BalIcon.png">
                        <% }else if(t.type == 'notification'){ %>
                               <span class="date"><%- num %><br></span>  <br>
                        <%  }%>
                       
                        <div class="dot z-depth-1">
                        </div>
                        <% if(t.type == 'notification') { %>

                             
                              <span><%- t.value.field_no_note_body_value %></span>
                        <% }else { %>
                             <p>
                                 New <%- t.type %> 
                            </p>
                            <span><%- t.date %></span>
                        <% } %>
                        
                  </div>
              <% }); %>
   
                
              </div>
            </div>
          </div>
        </div> 

       