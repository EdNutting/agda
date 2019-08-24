.. _installation-prebuilt-packages:

*************************************
Installation using pre-built packages
*************************************

All Platforms
=============

You will want to install Emacs or Atom first. 
Otherwise, the pre-built packages should have everything you need for the main Agda tools. 

If you are using Atom: You will need to install the 
`Agda plugin for Atom <https://atom.io/packages/agda-mode>`_ after 
following the install steps for your platform below.

*This section was last updated on: 24th August 2019 by Ed Nutting*


Arch Linux
==========

The following prebuilt packages are available:

* `Agda <https://www.archlinux.org/packages/community/x86_64/agda/>`_

* `Agda standard library <https://www.archlinux.org/packages/community/x86_64/agda-stdlib/>`_

However, due to significant packaging bugs `such as this <https://bugs.archlinux.org/task/61904?project=5&string=agda>`_, you might want to use alternative installation methods.

*This section was last updated some time before: 24th August 2019 by an unknown author*


Debian / Ubuntu
===============

Prebuilt packages are available for Debian and Ubuntu from Karmic onwards. To install:

.. code-block:: bash

  apt-get install agda-mode

This should install Agda and the Emacs mode.

The standard library is available in Debian and Ubuntu from Lucid onwards. To install:

.. code-block:: bash

  apt-get install agda-stdlib

More information:

* `Agda (Debian) <https://tracker.debian.org/pkg/agda>`_

* `Agda standard library (Debian) <https://tracker.debian.org/pkg/agda-stdlib>`_

* `Agda (Ubuntu) <https://launchpad.net/ubuntu/+source/agda>`_

* `Agda standard library (Ubuntu) <https://launchpad.net/ubuntu/+source/agda-stdlib>`_

Reporting bugs:

Please report any bugs to Debian, using:

.. code-block:: bash

  reportbug -B debian agda
  reportbug -B debian agda-stdlib

*This section was last updated some time before: 24th August 2019 by an unknown author*


Fedora
======

Agda is packaged in Fedora (since before Fedora 18).

.. code-block:: bash

  yum install Agda

will pull in emacs-agda-mode and ghc-Agda-devel.

*This section was last updated some time before: 24th August 2019 by an unknown author*


FreeBSD
=======

Packages are available from `FreshPorts
<https://www.freebsd.org/cgi/ports.cgi?query=agda&stype=all>`_ for
Agda and Agda standard library.

*This section was last updated some time before: 24th August 2019 by an unknown author*


NixOS
=====

Agda is part of the Nixpkgs collection that is used by
https://nixos.org/nixos. To install Agda and agda-mode for Emacs,
type:

.. code-block:: bash

  nix-env -f "<nixpkgs>" -iA haskellPackages.Agda

If you’re just interested in the library, you can also install the
library without the executable. The Agda standard library is currently
not installed automatically.

*This section was last updated some time before: 24th August 2019 by an unknown author*


OS X
====

`Homebrew <https://brew.sh>`_ provides prebuilt packages for OS X.  To install:

.. code-block:: bash

  brew install agda

This should take less than a minute, and install Agda together with
the Emacs mode and the standard library.

By default, the standard library is installed in
``/usr/local/lib/agda/``.  To use the standard library, it is
convenient to add ``/usr/local/lib/agda/standard-library.agda-lib`` to
``~/.agda/libraries``, and specify ``standard-library`` in
``~/.agda/defaults``.  Note this is not performed automatically.

It is also possible to install ``--without-stdlib``,
``--without-ghc``, or from ``--HEAD``.  Note this will require
building Agda from source.

For more information, refer to the `Homebrew documentation
<https://docs.brew.sh/>`_.

.. NOTE::

   If Emacs cannot find the ``agda-mode`` executable, it might help to
   install the exec-path-from-shell_ package by doing ``M-x
   package-install RET exec-path-from-shell RET``, and adding

   .. code-block:: elisp

     (exec-path-from-shell-initialize)

   to your ``.emacs`` file.

.. _exec-path-from-shell: https://github.com/purcell/exec-path-from-shell

*This section was last updated some time before: 24th August 2019 by an unknown author*


Windows
=======

We recommend you use Hackage or a release-source version of Agda on Windows,
as it is more robust long term, though it takes a few more steps to set up.

However, if you'd like a pre-built binary, the Agda wiki `has a page that
contains some options <https://wiki.portal.chalmers.se/agda/pmwiki.php?n=Main.Windows>`_.

*This section was last updated on: 24th August 2019 by Ed Nutting*
