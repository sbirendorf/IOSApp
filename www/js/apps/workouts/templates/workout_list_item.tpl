<td><%- title %> </td>
<td><% if (wo_status  == "Temporary") { %><div class="wrk_tmp"><%- wo_status %></div><% }%>
    <% if (wo_status  == "Ready") { %><div class="wrk_ready"><%- wo_status %></div><% }%>
    <% if (wo_status  == "Logged") { %><div class="wrk_logged"><%- wo_status %></div><% }%>
    <% if (wo_status  == "trac") { %><div class="wrk_ready">Trac <%- trac_title %></div><% }%>
    <% if (wo_status  == "Inprogress") { %><div class="wrk_tmp">Inprogress</div><% }%>
</td> 
<td><%- wo_date %></td>
<td>
    <% if (wo_status  != "trac") { %>
          <% if ( trac_day !=null) { %>
                <a href="#workout/<%- nid %>/edit"><i class="ion-edit" title="Edit Workout"></i></a>
          <% }%>
          <% if (trac_day  == null) { %>
                <!--<a href="node/<%- nid %>/edit/enter-actuals"><i class="ion-edit" title="Log Workout"></i></a>-->
          <% }%>
    <% }%>
    <% if (wo_status  == "trac") { %><a href="#workout/create/<%- nid %>/<%- uid %>/<%- day %>"><i class="ion-edit" title="Log Workout"></i></a><% }%>
</td>
<td><% if (wo_status  == "Temporary") { %> <button type="button" onclick="activate_workout( <%- nid %> )">Activate</button><% } %>
    <% if (wo_status  == "trac") { %> <a href="#workout/view/<%- nid %>/<%- uid %>/<%- day %>"> <i class="ion-eye" style="font-size:29px" title="View Workout"></i></a><% } %>
</td>


