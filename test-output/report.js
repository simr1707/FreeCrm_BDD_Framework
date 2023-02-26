$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/contacts.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Create Contacts",
  "description": "",
  "id": "free-crm-create-contacts",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Free CRM Create a new contact scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "title of login page is FREE CRM",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user is on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user moves to new contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user enters contacts details \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "position"
      ],
      "line": 13,
      "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;1"
    },
    {
      "cells": [
        "simr17070",
        "Simran12345",
        "simran",
        "singh",
        "manager"
      ],
      "line": 14,
      "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;2"
    },
    {
      "cells": [
        "simr17070",
        "Simran12345",
        "joy",
        "das",
        "employee"
      ],
      "line": 15,
      "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Free CRM Create a new contact scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "title of login page is FREE CRM",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enters \"simr17070\" and \"Simran12345\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user is on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user moves to new contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user enters contacts details \"simran\" and \"singh\" and \"manager\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinitions.user_is_already_on_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonStepDefinitions.title_of_login_page_is_FREE_CRM()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "simr17070",
      "offset": 13
    },
    {
      "val": "Simran12345",
      "offset": 29
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_And_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonStepDefinitions.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonStepDefinitions.user_is_on_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_moves_to_new_contacts_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "simran",
      "offset": 30
    },
    {
      "val": "singh",
      "offset": 43
    },
    {
      "val": "manager",
      "offset": 55
    }
  ],
  "location": "LoginStepDefinition.user_contacts_details_and_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonStepDefinitions.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 15,
  "name": "Free CRM Create a new contact scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "title of login page is FREE CRM",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enters \"simr17070\" and \"Simran12345\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user is on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user moves to new contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user enters contacts details \"joy\" and \"das\" and \"employee\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinitions.user_is_already_on_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonStepDefinitions.title_of_login_page_is_FREE_CRM()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "simr17070",
      "offset": 13
    },
    {
      "val": "Simran12345",
      "offset": 29
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_And_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonStepDefinitions.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonStepDefinitions.user_is_on_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_moves_to_new_contacts_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "joy",
      "offset": 30
    },
    {
      "val": "das",
      "offset": 40
    },
    {
      "val": "employee",
      "offset": 50
    }
  ],
  "location": "LoginStepDefinition.user_contacts_details_and_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonStepDefinitions.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("features/deals.feature");
formatter.feature({
  "line": 1,
  "name": "Deal Data Creation",
  "description": "",
  "id": "deal-data-creation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "deal-data-creation;free-crm-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "title of login page is FREE CRM",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enters username and password",
  "rows": [
    {
      "cells": [
        "simr17070",
        "Simran12345"
      ],
      "line": 6
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user moves to new deal page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enters deal details",
  "rows": [
    {
      "cells": [
        "test deal",
        "1000",
        "50",
        "10"
      ],
      "line": 11
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinitions.user_is_already_on_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonStepDefinitions.title_of_login_page_is_FREE_CRM()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DealStepDefinition.user_enters_username_And_password(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonStepDefinitions.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonStepDefinitions.user_is_on_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DealStepDefinition.user_moves_to_new_contacts_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DealStepDefinition.user_enters_deal_details(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonStepDefinitions.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("features/dealsmap.feature");
formatter.feature({
  "line": 1,
  "name": "Deal Data Creation",
  "description": "",
  "id": "deal-data-creation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "deal-data-creation;free-crm-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "title of login page is FREE CRM",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enters his username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 6
    },
    {
      "cells": [
        "simr17070",
        "Simran12345"
      ],
      "line": 7
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user moves to a new deal page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user fills deal details",
  "rows": [
    {
      "cells": [
        "title",
        "amount",
        "probability",
        "commission"
      ],
      "line": 12
    },
    {
      "cells": [
        "test deal 1",
        "1000",
        "50",
        "10"
      ],
      "line": 13
    },
    {
      "cells": [
        "test deal 2",
        "2000",
        "60",
        "20"
      ],
      "line": 14
    },
    {
      "cells": [
        "test deal 3",
        "3000",
        "70",
        "30"
      ],
      "line": 15
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinitions.user_is_already_on_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonStepDefinitions.title_of_login_page_is_FREE_CRM()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.user_enters_username_And_password(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonStepDefinitions.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonStepDefinitions.user_is_on_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.user_moves_to_new_contacts_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.user_enters_deal_details(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonStepDefinitions.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("features/hooks.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM app test",
  "description": "",
  "id": "free-crm-app-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "free crm create deal test",
  "description": "",
  "id": "free-crm-app-test;free-crm-create-deal-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user is on deal page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user fills the deals form",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "deal is created",
  "keyword": "Then "
});
formatter.match({
  "location": "Hooks_StepDefinition.user_is_on_deal_oage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Hooks_StepDefinition.user_fills_the_deals_form()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Hooks_StepDefinition.deal_is_created()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 9,
  "name": "free crm create contact test",
  "description": "",
  "id": "free-crm-app-test;free-crm-create-contact-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "user is on contact page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user fills the contact form",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "contact is created",
  "keyword": "Then "
});
formatter.match({
  "location": "Hooks_StepDefinition.user_is_on_contact_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Hooks_StepDefinition.user_fills_the_contact_form()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Hooks_StepDefinition.contact_is_created()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#Scenario: Free CRM Login Test Scenario"
    },
    {
      "line": 4,
      "value": "#Given user is already on login page"
    },
    {
      "line": 5,
      "value": "# When title of login page is FREE CRM"
    },
    {
      "line": 6,
      "value": "#Then user enters \"simr17070\" and \"Simran12345\""
    },
    {
      "line": 7,
      "value": "#Then user clicks on login button"
    },
    {
      "line": 8,
      "value": "#Then user is on homepage"
    },
    {
      "line": 9,
      "value": "#Then close the browser"
    },
    {
      "line": 11,
      "value": "#with Examples Keyword"
    }
  ],
  "line": 12,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "title of login page is FREE CRM",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user is on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 20,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;1"
    },
    {
      "cells": [
        "simr17070",
        "Simran12345"
      ],
      "line": 21,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;2"
    },
    {
      "cells": [
        "simr1707",
        "Simran67890"
      ],
      "line": 22,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "title of login page is FREE CRM",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user enters \"simr17070\" and \"Simran12345\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user is on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinitions.user_is_already_on_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonStepDefinitions.title_of_login_page_is_FREE_CRM()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "simr17070",
      "offset": 13
    },
    {
      "val": "Simran12345",
      "offset": 29
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_And_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonStepDefinitions.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonStepDefinitions.user_is_on_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonStepDefinitions.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 22,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "title of login page is FREE CRM",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user enters \"simr1707\" and \"Simran67890\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user is on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinitions.user_is_already_on_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonStepDefinitions.title_of_login_page_is_FREE_CRM()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "simr1707",
      "offset": 13
    },
    {
      "val": "Simran67890",
      "offset": 28
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_And_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonStepDefinitions.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonStepDefinitions.user_is_on_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonStepDefinitions.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("features/taggedHooks.feature");
formatter.feature({
  "line": 1,
  "name": "Test Tagged Hooks",
  "description": "",
  "id": "test-tagged-hooks",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "This is First test",
  "description": "",
  "id": "test-tagged-hooks;this-is-first-test",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@First"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "this is the first step",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "this is the second step",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "this is the third step",
  "keyword": "Then "
});
formatter.match({
  "location": "TaggedHooksStepDefinition.this_is_the_first_step()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TaggedHooksStepDefinition.this_is_the_second_step()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TaggedHooksStepDefinition.this_is_the_third_step()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "This is Second test",
  "description": "",
  "id": "test-tagged-hooks;this-is-second-test",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@Second"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "this is the first step",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "this is the second step",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "this is the third step",
  "keyword": "Then "
});
formatter.match({
  "location": "TaggedHooksStepDefinition.this_is_the_first_step()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TaggedHooksStepDefinition.this_is_the_second_step()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TaggedHooksStepDefinition.this_is_the_third_step()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 16,
  "name": "This is Third test",
  "description": "",
  "id": "test-tagged-hooks;this-is-third-test",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@Third"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "this is the first step",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "this is the second step",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "this is the third step",
  "keyword": "Then "
});
formatter.match({
  "location": "TaggedHooksStepDefinition.this_is_the_first_step()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TaggedHooksStepDefinition.this_is_the_second_step()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TaggedHooksStepDefinition.this_is_the_third_step()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("features/tagging.feature");
formatter.feature({
  "line": 2,
  "name": "Free CRM application testing",
  "description": "",
  "id": "free-crm-application-testing",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "login with correct username and password",
  "description": "",
  "id": "free-crm-application-testing;login-with-correct-username-and-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    },
    {
      "line": 3,
      "name": "@RegressionTest"
    },
    {
      "line": 3,
      "name": "@End2End"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "This is a valid login test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_valid_login_test()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 7,
  "name": "login with correct username and password",
  "description": "",
  "id": "free-crm-application-testing;login-with-correct-username-and-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@SmokeTest"
    },
    {
      "line": 6,
      "name": "@End2End"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "This is a invalid login test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_invalid_login_test()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "Create a contact",
  "description": "",
  "id": "free-crm-application-testing;create-a-contact",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "This is a contact test case",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_contact_test_case()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 13,
  "name": "Create a deal",
  "description": "",
  "id": "free-crm-application-testing;create-a-deal",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@End2End"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "This is a deal test case",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_deal_test_case()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 16,
  "name": "Create a task",
  "description": "",
  "id": "free-crm-application-testing;create-a-task",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "This is a task test case",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_task_test_case()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 19,
  "name": "Create a case",
  "description": "",
  "id": "free-crm-application-testing;create-a-case",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "This is a case test case",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_case_test_case()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 22,
  "name": "verify left panels links",
  "description": "",
  "id": "free-crm-application-testing;verify-left-panels-links",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@SmokeTest"
    },
    {
      "line": 21,
      "name": "@End2End"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "clicking on left panel links",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.clicking_on_left_panel_links()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 25,
  "name": "search a deal",
  "description": "",
  "id": "free-crm-application-testing;search-a-deal",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@SmokeTest"
    },
    {
      "line": 24,
      "name": "@End2End"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "This is a search deal test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_search_deal_test()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 28,
  "name": "search a case",
  "description": "",
  "id": "free-crm-application-testing;search-a-case",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 27,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "This is a search case test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_search_case_test()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 31,
  "name": "search a contact",
  "description": "",
  "id": "free-crm-application-testing;search-a-contact",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@End2End"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "This is a search contact test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_search_contact_test()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 34,
  "name": "search a call",
  "description": "",
  "id": "free-crm-application-testing;search-a-call",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "This is a search call test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_search_call_test()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 37,
  "name": "search a email",
  "description": "",
  "id": "free-crm-application-testing;search-a-email",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 36,
      "name": "@SmokeTest"
    },
    {
      "line": 36,
      "name": "@End2End"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "This is a search email test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_search_email_test()"
});
formatter.result({
  "status": "skipped"
});
});