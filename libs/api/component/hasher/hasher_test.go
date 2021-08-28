package hasher

import (
	"testing"
)

func TestApiComponentHasher(t *testing.T) {
	result := ApiComponentHasher("works")
	if result != "ApiComponentHasher works" {
		t.Error("Expected ApiComponentHasher to append 'works'")
	}
}
