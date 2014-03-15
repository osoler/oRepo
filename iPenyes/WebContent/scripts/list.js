function openFilter() {

    // Triggering bPopup when click event is fired
    $('#filterPopup').bPopup({
	    easing: 'easeOutBack', //uses jQuery easing plugin
        speed: 1050,
        transition: 'slideDown',
        position: [5, 73],
        modal:true,
        modalClose :false
    });

};

function closeFilter() {
	 $('#filterPopup').bPopup().close();
}

function resetFilter() {
	$('#filterForm')[0].reset();
}