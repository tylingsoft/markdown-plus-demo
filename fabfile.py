from fabric.api import local


def update():
    local('rm -rf bower_components')
    local('bower cache clean')
    local('bower update')
    local('rm bower_components/markdown-plus/bower.json')
    local('mv bower_components/markdown-plus/* .')
    local('rm -rf bower_components/markdown-plus')
