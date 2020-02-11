provider "google" {
  credentials = "${file("./creds/serviceaccount.json")}"
  project     = "project-exchange-rate"
  region      = "europe-west1"
}