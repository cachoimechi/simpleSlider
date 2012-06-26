(function () {
	var changeStyles = $("#customStyles"),
		inlineStyles = $("head style");
	$(changeStyles).val(inlineStyles.html());
	$(changeStyles).keyup(function () {
		inlineStyles.html(changeStyles.val());
		return false;
	});
})();