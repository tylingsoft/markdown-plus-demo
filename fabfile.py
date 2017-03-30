from fabric.api import local

def update():
    local('cp -r ../markdown-plus/dist/* .')
