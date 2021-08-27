package api_middleware

import (
	"testing"
)

func TestApiMiddleware(t *testing.T) {
	result := ApiMiddleware("works")
	if result != "ApiMiddleware works" {
		t.Error("Expected ApiMiddleware to append 'works'")
	}
}
