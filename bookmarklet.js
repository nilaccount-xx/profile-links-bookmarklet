javascript:(
  function(){ 
    function find_friend_fb_profile_id() {
      var element = document.getElementById('profile_action_send_message');
      return element
    };
    function find_own_fb_profile_id() {
      var element = document.getElementById('profile_pic');
      if(element) {
        return element.parentNode;
      };
    };
    function find_fb_profile_id() {
      return find_friend_fb_profile_id() || find_own_fb_profile_id();
    };
    element = find_fb_profile_id();
    if(element) {
      var id = element.href.split('id=')[1];
      window.location = 'http://www.facebook.com/posted.php?id=' + id
    } else {
      alert('You cannot access the links on this page.');
    };
  })();

