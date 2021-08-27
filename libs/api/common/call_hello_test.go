package common

import (
	"testing"
)

func TestCallHello(t *testing.T) {
	result := CallHello("abc")
	if result != "Hello abc" {
		t.Error("Expected CallHello to append 'abc'")
	}
}
