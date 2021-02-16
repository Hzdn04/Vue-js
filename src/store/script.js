$('$btn-search').on('click',function() {
   $.ajax({
       url:'http://www.recipepuppy.com/',
       type:'get',
       dataType: 'json'
   }) 
});