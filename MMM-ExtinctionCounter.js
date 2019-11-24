/* Magic Mirror
 * Module: MMM-ExtinctionCounter
 *
 *
 * By Mykle1 - MIT Licensed
 *
 */

Module.register("MMM-ExtinctionCounter",{

	defaults: {
		  size: "",
			textColor: "",
	},

	getStyles: function() {
        return ["MMM-ExtinctionCounter.css"];
    },


	getDom: function() {

		var iframe = document.createElement("IFRAME");
		iframe.classList.add("iframe");
		iframe.style = "border:none"
		iframe.scrolling = "no";

		if (this.config.size === "large") {
			iframe.height = "305px";
			iframe.width = "355px";
		  type="text/javascript";
      iframe.src="https://www.theworldcounts.com/counters/degradation_and_destruction_of_ecosystems/species_extinction_facts/embed?background_color=black&color=" + this.config.textColor + "&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=24&token=221fff62ddf146b6ccf3e2eb0a3df0553ffd66fc";

  } else if (this.config.size === "medium") {
		iframe.height = "205px";
		iframe.width = "305px";
		type="text/javascript";
		iframe.src="https://www.theworldcounts.com/counters/degradation_and_destruction_of_ecosystems/species_extinction_facts/embed?background_color=black&color=" + this.config.textColor + "&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20&token=221fff62ddf146b6ccf3e2eb0a3df0553ffd66fc";

	} else if (this.config.size === "small") {
		iframe.height = "105px";
		iframe.width = "245px";
		type="text/javascript";
		iframe.src="https://www.theworldcounts.com/counters/degradation_and_destruction_of_ecosystems/species_extinction_facts/embed?background_color=black&color=" + this.config.textColor + "&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=16&token=221fff62ddf146b6ccf3e2eb0a3df0553ffd66fc";
  }

		return iframe;
	},

	 /////  Add this function to the modules you want to control with voice //////

    notificationReceived: function(notification, payload) {
        if (notification === 'HIDE_EXTINCTIONS') {
            this.hide(1000);
        }  else if (notification === 'SHOW_EXTINCTIONS') {
            this.show(1000);
        }

    },

});
