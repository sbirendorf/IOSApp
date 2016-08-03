
<div class="col s12 workout-list">
                    <ul class="nav nav-pills wo-pill">
                          <li><a data-toggle="tab" href="#ath-info-tab">Completed</a></li>
                          <li class="active"><a data-toggle="tab" href="#ath-info-tab1">Available</a></li>
                          <li><a data-toggle="tab" href="#ath-info-tab2">Upcoming</a></li>
                    </ul>
                    <br>
                        <div class="tab-content">
                          <div id="ath-info-tab" class="tab-pane fade">
                              <table class="table">
						              <thead class="thead-inverse">
						                  <tr>
						                      <th>Workout</th>
						                      <th>Date</th>
						                      <th>Edit</th>
						                  </tr>
						              </thead>
						              <tbody>
						                <% _(data).each(function(e) { %>
							                 <% if(e.wo_status == 'Logged' || e.wo_status == 'Inprogress') { %>
									           	 <tr style="height: 48px;">
						                                <td><%- e.title %> - <%- e.workout_day %></td>
						                                <td>
						                                	<%- e.wo_date %>
						                                </td>
						                                <td><a href="#workout/<%- e.nid %>/edit" class="btn" style="background:black;"><i class="ion-edit"></i></a></td>
						                     	 </tr>
									         <% } %>
						                     
						                <% }); %>
						              </tbody>
						          </table>
                           
                          </div>
                          <div id="ath-info-tab1" class="tab-pane fade in active">
                           		 <table class="table">
						              <thead class="thead-inverse">
						                  <tr>
						                      <th>Workout</th>
						                      <th>View/Start</th>
						                  </tr>
						              </thead>
						              <tbody>
						                <% _(data).each(function(e) { %>
							                 <% if(e.wo_status == 'trac' && e.best_match == true) { %>
									           	 <tr style="height: 48px;">
						                                <td><%- e.title %>- <%- e.workout_day %></td>
						                                <td><a href="#workout/view/<%- e.nid %>/<%- e.uid %>/<%- e.day %>"><i class="btn wo-log ion-eye" title="View Workout"></i></a></td>
						                     	 </tr>
									         <% } %>

									         <% if(e.wo_status == 'Ready') { %>
									           	 <tr style="height: 48px;">
						                                <td><%- e.title %>- <%- e.workout_day %></td>
						                                <td><a href="#workout/<%- e.nid %>/edit"><i class="btn wo-log ion-eye" title="View Workout"></i></a></td>
						                     	 </tr>
									         <% } %>
						                     
						                <% }); %>
						              </tbody>
						          </table>
                         
                          </div>
                          <div id="ath-info-tab2" class="tab-pane fade">
                             	<table class="table">
						              <thead class="thead-inverse">
						                  <tr>
						                      <th>Workout</th>
						                      <th>Date</th>
						                      <th>Action</th>
						                  </tr>
						              </thead>
						              <tbody>
						                <% _(data).each(function(e) { %>
							                 <% if(e.wo_status == 'trac' && (e.best_match == null) || e.best_match == 'null' || e.best_match == false) { %>
									           	 <tr>
						                                <td><%- e.title %>- <%- e.workout_day %></td>
						                                <td> </td>
						                                <td>
							                                <a class="btn btn-success" href="#workout/create/<%- e.nid %>/<%- e.uid %>/<%- e.day %>"><i class="ion-play" title="Log Workout"></i></a> 
							                                <a style="margin-left: 5px;" class="btn wo-log" href="#workout/view/<%- e.nid %>/<%- e.uid %>/<%- e.day %>">View</a>
						                                </td>
						                     	 </tr>
									         <% } %>

									         <% if(e.wo_status == 'Temporary') { %>
									           	 <tr style="height: 48px;">
						                                <td><%- e.title %>- <%- e.workout_day %></td>
						                                <td>
						                                	<%- e.wo_date %>
						                                </td>
						                                <td><span class="wo-activate btn btn-warning" id="<%- e.nid %>">Activate</span></td>
						                     	 </tr>
									         <% } %>
						                     
						                <% }); %>
						              </tbody>
						          </table>
                           
                          </div>
                        </div>
</div>