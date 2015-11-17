from fabric.api import local


def update():
    local('rm -rf dist')
    local('cp -r ../markdown-plus/dist .')
    local('cp ../markdown-plus/index.html .')
    local('cp ../markdown-plus/index.js .')
    local('cp ../markdown-plus/sample.md .')
    local('cp ../markdown-plus/icon.png .')
