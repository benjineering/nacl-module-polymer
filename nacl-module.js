Polymer({
   width: 0,
   height: 0,

   ready: function () {
      this.listener = this.$.listener;
      this.loadPercent = 0;

      if (this.onloadstart) {
         this.listener.addEventListener('loadstart', this.onloadstart, true);
      }

      if (this.onprogress) {
         this.listener.addEventListener('progress', this.onprogress, true);
      }

      if (this.onerror) {
         this.listener.addEventListener('error', this.onerror, true);
      }

      if (this.onabort) {
         this.listener.addEventListener('abort', this.onabort, true);
      }

      if (this.onload) {
         this.listener.addEventListener('load', this.onload, true);
      }      

      if (this.onloadend) {
         this.listener.addEventListener('loadend', this.onloadend, true);
      }

      if (this.oncrash) {
         this.listener.addEventListener('crash', this.oncrash, true);
      }

      if (this.onmessage) {
         this.listener.addEventListener('message', this.onmessage, true);
      }

      if (this.onerror) {
         this.listener.addEventListener('error', this.onerror, true);
      }

      this.module = document.createElement('embed');

      this.module.setAttribute('id', 'module');
      this.module.setAttribute('width', this.width);
      this.module.setAttribute('height', this.height);
      this.module.setAttribute('type', this.mimetype);
      this.module.setAttribute('src', this.manifest);
      
      this.listener.appendChild(this.module);
   }
});