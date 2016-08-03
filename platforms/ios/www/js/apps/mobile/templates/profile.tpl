

    <div class=" profile">
		<div class="col-md-3">
			<div class="profile-sidebar">
				<!-- SIDEBAR USERPIC -->
				<div class="profile-userpic">
					<img src="<%= img %>" class="img-responsive" style="height:190px; width:15%" alt="">
				</div>
			</div>
			<div class="profile-rightsidebar">
				<!-- END SIDEBAR USERPIC -->
				<!-- SIDEBAR USER TITLE -->
				<div class="profile-usertitle">
						<h3><%= name %></h3>
						 <% if(inj == false) { %>
                   			<div class="chip" style="border-radius: 8px; background:#92d050;"> FULL PARTICIPATION </div>
                		 <% } else {%>
                		 	<div class="chip" style="border-radius: 8px;background:<%= inj.the_color %>; text-transform: uppercase;"> <%= inj.status %> </div>
                		 <% } %>
						<h5><%= position %></h5>
						<h5>Strength Level:<%= level_low %></h5>
						<h5>Skill Level:<%= level_up %></h5>
						<h5>Needs: <div class="chip" style="border-radius: 8px;text-transform: uppercase;"> <%= need1 %> </div></h5>
				</div>
				<!-- END SIDEBAR USER TITLE -->

				<!-- END MENU -->
			</div>
		</div>
	</div>
