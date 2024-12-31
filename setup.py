from setuptools import setup, find_packages

setup(
    name="poetry-automation",
    version="0.2.1",
    packages=find_packages(),
    install_requires=[
        "requests==2.31.0",
        "tqdm==4.66.1",
        "pypinyin==0.50.0",
        "urllib3==2.2.1"
    ]
) 