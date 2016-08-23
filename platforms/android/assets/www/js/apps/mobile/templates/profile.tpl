
<div class="container">
  <div class="row">
    <div class="col-xs-4 col-md-4 img-left">
      			<div class="profile-userpic">
					<img src="<%= img %>" class="img-responsive" style="margin-top: 25px; height:140px; width:15%" alt="">
				</div>
    </div>
    <div class="col-xs-6 col-md-4 profile-right">
      			<h3><%= name %></h3>
						 <% if(inj == false) { %>
                   			<!-- <div class="chip" style="border-radius: 8px; background:#92d050;"> FULL PARTICIPATION </div> -->
                		 <% } else {%>
                		 	<div class="chip" style="border-radius: 8px;background:<%= inj.the_color %>; text-transform: uppercase;"> <%= inj.status %> </div>
                		 <% } %>
						<h6><%= position %></h6>
						<h6>Strength Level: <%= level_low %></h6>
						<h6>Skill Level: <%= level_up %></h6>
             <% if(need1 == 'Load') { %>
                <h6 class="profile-need">Needs: <div class="chip" style="border-radius: 8px;text-transform: uppercase;color:white; background: rgb(156,145,146);"> <%= need1 %> </div></h6>
             <% } if (need1 == 'Explode') {%>
                <h6 class="profile-need">Needs: <div class="chip" style="border-radius: 8px;text-transform: uppercase;color:white; background: #000;"> <%= need1 %> </div></h6>
             <% } if (need1 == 'Drive') {%>
						    <h6 class="profile-need">Needs: <div class="chip" style="border-radius: 8px;text-transform: uppercase;color:white; background: rgb(184,51,67);"> <%= need1 %> </div></h6>
             <% } if (need1 == 'No Scan Found') {%>
                <h6 class="profile-need">Needs: <div class="chip" style="border-radius: 8px;text-transform: uppercase;"> <%= need1 %> </div></h6>
             <% } %>
    </div>
  </div>
</div>


    
