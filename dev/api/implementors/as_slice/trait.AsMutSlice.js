(function() {var implementors = {};
implementors["as_slice"] = [];
implementors["heapless"] = [{"text":"impl&lt;P, T&gt; AsMutSlice for Box&lt;P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Pool,<br>&nbsp;&nbsp;&nbsp;&nbsp;P::Data: AsMutSlice&lt;Element = T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;A&gt; AsMutSlice for Box&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: AsMutSlice,&nbsp;</span>","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()