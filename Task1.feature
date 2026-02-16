Scenario: Wrong password log in
    Given login page is opened
    And user has an account
    When try to log in with wrong password
    Then user sees error message

Scenario: Create an account
    Given registration page is opened
    And valid credentials are typed in
    When try to sign up
    Then user sees login page

Scenario: Log in with valid credentials
    Given login page is opened
    And user has an account
    When try to log in with valid credentials
    Then user sees account page

Scenario: Sort only power tools from MightyCraft Hardware
    Given main page is opened
    And sorted by power tools
    When filter by brand MightyCraft Hardware
    Then user sees only power tools from MightyCraft Hardware

Scenario: Sort by only hand tools except hammer
    Given main page is opened
    And all hand tools are selected
    When hammer is deselected
    Then user sees only hand tools excluding hammer

Scenario: Search for bolt priced 100-200
    Given main page is opened
    And price range set to 100-200
    When search for bolt
    Then user sees only products containing bolt priced 100-200

Scenario: Favorited product in the profile
    Given account page is opened
    And user previously favorited an item
    When user opens favorites page
    Then user sees previously favorited item

Scenario: Adding items to the cart
    Given main page is opened
    And an item is added to the cart
    When user opens checkout page
    Then user sees previously added item