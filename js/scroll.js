$(function()
{
	$('.menu, .back').scroll();
});

(function($)
{
	$.fn.scroll = function()
	{
		var _this = this;
		this.init = function()
		{
			$('a', this).on('click', _this.click);
		}
		this.click = function()
		{
			var n = $('#' + $(this).attr('href').replace(/^\.\/#/, '')),
				ot = n.offset().top,
				h = Math.max.apply(null, [document.body.clientHeight, document.body.scrollHeight, document.documentElement.scrollHeight,document.documentElement.clientHeight]),
				wh = $(window).height(),
				rot = h - wh > ot ? ot : h - wh;
			$('html,body').stop().animate({scrollTop: rot}, 750, 'easeOutQuart');
			return false;
		}
		_this.init();
	};
})(jQuery);