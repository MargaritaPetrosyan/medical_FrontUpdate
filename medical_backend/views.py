from django.shortcuts import render

def homepage(request):
    return render(request, 'homepage.html')

def services(request):
    return render(request, 'services.html')

def plasticSurgery(request):
    return render(request, 'plastic-surgery.html')