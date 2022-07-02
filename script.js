class DocumentConfig {
    head = document.getElementsByTagName('head').item(0)
    body = document.getElementsByTagName('body').item(0)
}

class BodyParts {

}

class HeadParts {
    
}

const config = new DocumentConfig()
console.log(config.head)
console.log(config.body)