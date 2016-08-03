<!-- Main Content -->
<div class="animated fadeinup">
    <br>
    <!-- Swiper -->
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <% _(total_lower).each(function(s,scan) { %>
            
            <div class="swiper-slide">
                <div id="bar_chart" class="card animated fadeinup delay-3">
                    <div class="legend">
                        <h5 class="uppercase">Landing</h5>
                        <p><span class="data-color" style="background: rgb(156,145,146);"></span>Left
                           <span class="data-color" style="background: #000;"></span>Right
                        </p>
                    </div>

                    <div class="barChartCont">
                        <canvas id="LowbarChart<%- scan %>"></canvas>
                    </div>
                </div>
            </div>
            <% }); %>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div><br>
    </div>
    <br>
    <!-- Line chart -->
    <div id="line_chart" class="card animated fadeinup">
            <div class="legend">
                <h5 class="uppercase">Landing Timeline </h5>
                    <p>
                     <span class="data-color" style="background: rgb(156,145,146);"></span>Left
                     <span class="data-color" style="background: #000;"></span>Right
                    </p>
            </div>
            <div class="lineChartCont">
              <canvas id="canvas" style="width: 95%"></canvas>
            </div>
    </div>
</div> <!-- End of Main Contents -->
       