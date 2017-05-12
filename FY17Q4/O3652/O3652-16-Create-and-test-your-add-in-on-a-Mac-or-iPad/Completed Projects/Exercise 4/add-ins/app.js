/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

'use strict';

(function () {

  // The initialize function must be run each time a new page is loaded
  Office.initialize = function (reason) {
    $(document).ready(function () {
      $('#run').click(run);
            //Add this line:
      $('#write-data-to-selection').click(writeDataToSelection);
    });
  };

  function run() {
    
    return Excel.run(function (context) {
      /**
       * Insert your Excel code here
       */
      return context.sync();
    });
    
  }

  function writeDataToSelection(){
     Office.context.document.setSelectedDataAsync("Office add-ins are awesome!",
      function(result){
        if (result.status === Office.AsyncResultStatus.Succeeded) {
          console.log("Writing to the document succeeded!");
        } else {
          console.log("Writing to the document failed: " + result.error.message);
        }
      }
    );
 }

})();