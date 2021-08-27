package api_middleware

func ApiMiddleware(name string) string {
	result := "ApiMiddleware " + name
	return result
}
