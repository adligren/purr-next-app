package handler

import (
	"io"
	"net/http"

	"github.com/adligren/purr-next-app/extras"
)

func Handler(w http.ResponseWriter, r *http.Request) {
	file, err := extras.GetJsonFile()
	if err != nil {
		http.Error(w, "Internal Server Error", 500)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	io.Copy(w, file)
}
