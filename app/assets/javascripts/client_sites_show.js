var Obj = {
  indicatorPercentDisplayed: false,
  webRadiaObj: null,
  designRadiaObj: null,
  developRadiaObj: null,

  initIndicatorContainer: function(){
    var self = Obj;
    $('#indicatorContainer1').radialIndicator({
        barColor: '#fff',
        barBgColor: '#000',
        radius: 120,
        barWidth: 20,
        initValue: 0,
        roundCorner : false,
        percentage: true
    });
    self.webRadiaObj = $('#indicatorContainer1').data('radialIndicator');

    $('#indicatorContainer2').radialIndicator({
        barColor: '#fff',
        barBgColor: '#000',
        radius: 120,
        barWidth: 20,
        initValue: 0,
        roundCorner : false,
        percentage: true
    });
    self.designRadiaObj = $('#indicatorContainer2').data('radialIndicator');

    $('#indicatorContainer3').radialIndicator({
        barColor: '#fff',
        barBgColor: '#000',
        barWidth: 20,
        radius: 120,
        initValue: 0,
        roundCorner : false,
        percentage: true
    });
    self.developRadiaObj = $('#indicatorContainer3').data('radialIndicator');
  },

  initUnslider: function(){
    var unslider04 = $('#project-show').unslider({
        dots: true
    });
    var data04 = unslider04.data('unslider');

    $('.unslider-arrow').click(function() {
        var fn = this.className.split(' ')[1];
        data04[fn]();
    });
  },

  onNavBarClicked: function(event){
    var self = Obj;
    $('.navbar-collapse').collapse('hide');
  },

  onNavItemClicked: function(event){
    var self = Obj;
    $('nav li').removeClass('active');
    $(this).addClass('active');
  },

  activeNavItemById: function(divId){
    var self = Obj;
    var divToTop = document.getElementById(divId).offsetTop;
    if (divToTop>=$(window).scrollTop()&&divToTop<($(window).scrollTop()+$(window).height())){
      $('nav li').removeClass('active');
      $('#'+divId+'-nav-item').addClass('active');
    }
  },

  onWindowScrolled: function(event){
    var self =Obj;
    var distanceToTop = document.getElementById("skill").offsetTop+300;
    if (distanceToTop>=$(window).scrollTop()&&distanceToTop<($(window).scrollTop()+$(window).height())){
      if (!self.indicatorPercentDisplayed){
        self.indicatorPercentDisplayed=true;
        self.developRadiaObj.animate(84);
        self.designRadiaObj.animate(70);
        self.webRadiaObj.animate(80);
      }
    }
    self.activeNavItemById('home');
    self.activeNavItemById('aboutme');
    self.activeNavItemById('project');
    self.activeNavItemById('interests');
    self.activeNavItemById('personal');
    self.activeNavItemById('contact');
    
  },

  onChickensaladHovered: function(event){
    var self = Obj;
    $('.chickensalad .content').removeClass('hidden');
  },

  onChickensaladNormaled: function(event){
    var self = Obj;
    $('.chickensalad .content').addClass('hidden');
  },

  initialize: function(){
    var self = Obj;

    self.initUnslider();
    $('.nav').singlePageNav({
      offset: 50
    });
    new WOW().init();
    $('.navbar-collapse a').on('click', self.onNavBarClicked);
    $('nav li').on('click', self.onNavItemClicked);
    $('.chickensalad').hover(self.onChickensaladHovered, self.onChickensaladNormaled);
    $(window).on('scroll', self.onWindowScrolled);
    self.initIndicatorContainer();
  }
};

$(function(){
  Obj.initialize();
});