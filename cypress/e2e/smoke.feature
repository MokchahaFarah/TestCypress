Feature: Smoke
  Background:
    When simple login to "testEnv" with "admin"

  @test
  Scenario: Test Scenario
    When get All "Alania" promo Products
