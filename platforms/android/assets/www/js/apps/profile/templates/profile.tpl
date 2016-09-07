  <!-- Page Content -->
      <div id="content" class="light-grey" style="margin-top: -8px;">

        <!-- Hero Header -->
        <div class="h-banner animated fadeindown">
        <h3 class="ath-title"><%= name %></h3>
          <div class="parallax">
            <div class="profile-userpic">
                <img src="<%= img %>" class="img-responsive" style="" alt="athlete-image">
            </div>
          </div>
         </div>

        <!-- Profile Content -->
        <div class="animated fadeinup delay-1">
          
          <div class="card m-t-40 animated fadeinup delay-2">
            <div class="c-widget">
              <div class="c-widget-figure primary-color">
                <i class="ion-clipboard"></i>
              </div>
              <div class="c-widget-body">
                <p class="m-0"><a href="#workouts"> Workouts </a></p>
              </div>
            </div>
          </div>

          <div class="card animated fadeinright delay-4">
            <h5 class="uppercase">Athlete Information</h5>
            <p class="flow-text">
              <% if(inj == false) { %>
                        <!-- <div class="chip" style="border-radius: 8px; background:#92d050;"> FULL PARTICIPATION </div> -->
                     <% } else {%>
                      <div class="chip" style="border-radius: 8px;background:<%= inj.the_color %>; text-transform: uppercase;"> <%= inj.status %> </div>
                     <% } %>
            <h6>Position: <%= position %></h6>
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

            </p>
          </div>

        </div> 
      
         
      </div> <!-- End of Page Content -->