$('.logo, .preview-img').tilt({
    glare: true,
    maxGlare: .5,
    scale: 1.2
});

$('button').tooltip({
    trigger: 'click',
    placement: 'bottom'
});

function setTooltip(btn,message) {
    $(btn).tooltip('hide')
        .attr('data-original-title', message)
        .tooltip('show');
}

function hideTooltip(btn) {
    setTimeout(function() {
        $(btn).tooltip('hide');
    }, 1000);
}


var clipboard = new ClipboardJS('.copy', {
    // container: document.getElementById('modal')
});

clipboard.on('success', function (e) {
    setTooltip(e.trigger, 'Copied!');
    hideTooltip(e.trigger);
});

// Get Year
var date = new Date();
$('#year').text(date.getFullYear());