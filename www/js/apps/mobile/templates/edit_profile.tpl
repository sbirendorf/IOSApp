
<div class="container">
    <h3 style="text-align: center;">Account Settings</h3>
    <div class="edit-profile">

            <div class="profile-userpic">
                <img src="<%= filePicture %>" class="img-responsive" style="height:140px; width:15%" alt="">
            </div>
            <a href="#<%- nid %>/user_edit" style="float: left;margin-top: 165px;margin-left: 5px;" class="js-upload"><i class="ion-camera" title="Edit Picture"></i></a>


            <div class="row">
                <div class="col s12">
                    <ul class="nav nav-tabs profile-tabs">
                          <li class="active"><a data-toggle="tab" href="#ath-info-tab">Athlete Info</a></li>
                          <li><a data-toggle="tab" href="#ath-info-tab1">Personal Info</a></li>
                          <li><a data-toggle="tab" href="#ath-info-tab2">Notifications</a></li>
                    </ul>

                        <div class="tab-content">
                          <div id="ath-info-tab" class="tab-pane fade in active">
                            <h4 style="text-align: center;">Athlete Info</h4>
                            <form class="form-inputs">
                    <div class="hide">
                        <input name="nid" type="numeric" value="<%= nid %>" />
                        <input name="uid" type="numeric" value="<%= uid %>" />
                    </div>
                    <div class="profile-usertitle">
                       <label for="edit-title">User Name: *
                        <input type="text" maxlength="255" name="username" id="edit-username" size="60" value="<%-username %>" required placeholder=""   />
                    </label>

                    <label for="edit-title">Name: *
                        <input type="text" maxlength="255" name="name" id="edit-name" size="60" value="<%-name %>"  required placeholder=""  />
                    </label> 

                    <label for="edit-title">Email: *
                        <input type="email" maxlength="255" name="email" id="edit-email" size="60" value="<%-mail %>" required placeholder=""  />
                    </label>

                    <label for="edit-title">Mobile Phone:
                        <input type="text"  maxlength="255" name="cellPhone" id="edit-cell-phone" size="60" value="<%-cellPhone %>"  />
                    </label>
                    <label for="edit-title">Password:
                        <input type="password" maxlength="255" name="password" id="password" size="60" value="<%-password %>"  />
                    </label>
                    <label for="edit-title">Confirm Password:
                        <input type="password" maxlength="255" name="password_confirm" id="confirm_password" size="60" value="<%-password %>"  />
                    </label>
                    
                    <h5>Change Sport Position</h5>
                    <br>
                    <label>Sport:</label>
                    <select name="sport" class="browser-default" id="sport" required>
                        <option value="Other">Other</option>
                        <% _(sport.sports).each(function(a) { %>
                        <option value="<%= a%>"<% if(sport.value == a) { %> selected <% } %><%= a %>><%= a %></option>
                        <% }); %>
                    </select>


                    <label>Position:</label>       
                    <select name="position" class="browser-default" id="position" required>
                        <option value="Other">Other</option>
                        <% _(position.positions).each(function(a) { %>
                        <option value="<%= a%>"<% if(position.value == a) { %> selected <% } %><%= a %>><%= a %></option>
                        <% }); %>
                    </select>

                    <label>Sub Position:</label>       
                    <select name="sub_position" class="browser-default" id="sub_position" required>
                        <option value="Other">Other</option>
                        <% _(subPosition.subPositions).each(function(a) { %>
                        <option value="<%= a%>"<% if(subPosition.value == a) { %> selected <% } %><%= a %>><%= a %></option>
                        <% }); %>
                    </select>
                    <br>
            <label for="edit-title">Date Of Birth: </label>
            <input type="text" class="js-datepicker" maxlength="255" name="dateOfBirth" id="edit-date-of-birth" size="60" value="<%-dateOfBirth %>" placeholder=""  /><br>
            <label>Gender:</label>
            <select id="gender" name="gender" class="browser-default" required placeholder="" >
                <option value="Male" <% if(gender == 'Male') { %> selected <% } %>>Male</option>
                <option value="Female" <% if(gender == 'Female') { %> selected <% } %>>Female</option>
            </select>

            <br><label>Level:</label>
            <select id="level" name="level" class="browser-default" required>
                <option value="none">Select Athlete Level</option>
                <option value="High School" <% if(level == 'High School') { %> selected <% } %>>High School</option>
                <option value="College" <% if(level == 'College') { %> selected <% } %>>College</option>
                <option value="Pro/Olympic" <% if(level == 'Pro/Olympic') { %> selected <% } %>>Pro/Olympic</option>
                <option value="Pro" <% if(level == 'Pro') { %> selected <% } %>>Pro</option>
                <option value="Unavail" <% if(level == 'Unavail') { %> selected <% } %>>Unavail</option>
            </select>


           <br>
            <label>Hide my name in leaderboards:</label>
            <select name="privacy" class="browser-default" required>
                <option value="0">No</option>
                <option value="1" <%  if(privacy == 1) { %> selected <% } %>>Yes</option>
            </select>


                </div>
                <br><input class="btn btn-danger" type="submit" value="Save"><br>
            </form>
                          </div>
                          <div id="ath-info-tab1" class="tab-pane fade">
                            <h4 style="text-align: center;">Personal Information</h4>
            
                          </div>
                          <div id="ath-info-tab2" class="tab-pane fade">
                                  <h4 style="text-align: center;">Notifications</h4>
                          </div>
                        </div>
            </div>
            <div id="ath-info-tab" class="col s12">
                
        </div>

       
    
    </div>



</div>
</div>
</div>
<br><br><br>
