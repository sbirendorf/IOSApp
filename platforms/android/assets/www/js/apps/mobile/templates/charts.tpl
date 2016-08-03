<!-- Main Content -->

        <div class="animated fadeinup">
            <br>
          <!-- Line chart -->
          <% _(total).each(function(t,num) { %>
                   <div id="line_chart" class="card animated fadeinup">
                    <div class="legend">
                      <h5 class="uppercase"><%- t.name %></h5>
                    
                    </div>

                    <div class="lineChartCont">
                      <canvas id="canvas<%- num %>"></canvas>
                    </div>
                  </div>
          <% }); %>
          
        </div> <!-- End of Main Contents -->