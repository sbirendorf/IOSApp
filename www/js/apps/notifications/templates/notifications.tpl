<div class="container">
    <label>Check for notifications every:</label>
    <select id="update" class="browser-default update-time">
        <option value="0" <% if(update == '0') { %> selected <% } %>>Never</option>
        <option value="1" <% if(update == '1') { %> selected <% } %>>1 Hour</option>
        <option value="4" <% if(update == '4') { %> selected <% } %>>4 Hours</option>
        <option value="6" <% if(update == '6') { %> selected <% } %>>6 Hours</option>
        <option value="12" <% if(update == '12') { %> selected <% } %>>12 Hours</option>
        <option value="24" <% if(update == '24') { %> selected <% } %>>24 Hours</option>
    </select>

    <% _(notes).each(function(note) { %>   
    <% if(note.field_nt_status_value == 'unread') { %> 
    <br>      
    <div class="card animated fadeinup delay-3" style="background-color: #b7b7b7;color: white;width: 95%;margin-left: 2%;" >
        <div class="c-widget">
            <div class="c-widget-figure accent-color">
                <% if(note.field_no_note_type_value == 'server') { %> <i class="ion-alert-circled"></i><% }  %> 
                <% if(note.field_no_note_type_value == 'other') { %>  <i class="ion-android-notifications-none"></i> <% }  %> 
                <% if(note.field_no_note_type_value == 'workout') { %> <i class="ion-android-contact"></i> <% }  %> 
            </div>
            <div class="c-widget-body">
                <p class="m-0 text-capitalize"><%= note.title %></p>
                <p class="small m-0"><%= note.field_no_note_body_value %></p>
            </div>
        </div>
        <a class="close-notification no-smoothState"><i class="ion-android-close" id="<%- note.nid %>"></i></a>
    </div>
    <br>
    <% }  %> 
    <% }); %>
</div>