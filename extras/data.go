package extras

import (
	"embed"
	"io/fs"
)

//go:embed data/*.json
var folder embed.FS

func GetJsonFile() (fs.File, error) {
	file, err := folder.Open("data/catdata.json")
	if err != nil {
		return nil, err
	}
	defer file.Close()
	return file, nil
}
