from fabric.api import local


def update():
    local('rm -rf vendor')
    local('bower cache clean')
    local('bower update')
    local('rm vendor/markdown-plus/bower.json')
    local('mv vendor/markdown-plus/* .')
    local('rm -rf vendor')
