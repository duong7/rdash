function showUI() {
  var app = DocumentApp.getUi();
  var html = HtmlService.createTemplateFromFile('sideBar').evaluate()
  html.setTitle('֍ RDash').setWidth(300);
  app.showSidebar(html);
  Logger.log("Load success");
}

