
hybris Changes
=============================

This is a modified version of Solr.

The following directories were removed:
- docs
- example

The following files/directories were added:
- HYBRIS_README.txt
- contrib/hybris
- server/solr/security.json.example
- server/solr/solr.p12
- server/solr/solr_client.p12

The following files/directories were modified/replaced:
- bin/solr.cmd:
	- workaround for https://issues.apache.org/jira/browse/SOLR-7283 (lines 19-20)
- bin/solr.in.cmd:
	- authentication and ssl configuration example (lines 208-227)
	- remove UseLargePages parameter from GC_TUNE parameters due to problems with running solr within docker container (line 229)
- bin/solr.in.sh:
	- authentication and ssl configuration example (lines 236-255)
	- remove UseLargePages parameter from GC_TUNE parameters due to problems with running solr within docker container (line 257)
- server/solr/solr.xml
- server/solr/configsets
- ant library (due to https://nvd.nist.gov/vuln/detail/CVE-2020-1945, https://nvd.nist.gov/vuln/detail/CVE-2012-2098 and https://nvd.nist.gov/vuln/detail/CVE-2020-11979)
	- licenses/ant-1.8.2.jar.sha1 -> licenses/ant-1.10.9.jar.sha1
	- dist/test-framework/lib/ant-1.8.2.jar -> dist/test-framework/lib/ant-1.10.9.jar
- icu4j library (due to https://nvd.nist.gov/vuln/detail/CVE-2020-10531)
	- licenses/icu4j-62.1.jar.sha1 -> licenses/icu4j-67.1.jar.sha1
	- contrib/analysis-extras/lib/icu4j-62.1.jar -> contrib/analysis-extras/lib/icu4j-67.1.jar
- jackson-databind related files (due to https://nvd.nist.gov/vuln/detail/CVE-2020-25649)
	- licenses/jackson-databind-2.10.1.jar.sha1 -> licenses/jackson-databind-2.10.5.1.jar.sha1
	- server/solr-webapp/webapp/WEB-INF/lib/jackson-databind-2.10.1.jar -> server/solr-webapp/webapp/WEB-INF/lib/jackson-databind-2.10.5.1.jar
	- contrib/clustering/lib/jackson-databind-2.10.1.jar -> contrib/clustering/lib/jackson-databind-2.10.5.1.jar
	- contrib/prometheus-exporter/lib/jackson-databind-2.10.1.jar -> contrib/prometheus-exporter/lib/jackson-databind-2.10.5.1.jar
- http2 and jetty libraries (due to due to https://nvd.nist.gov/vuln/detail/CVE-2019-17638, https://nvd.nist.gov/vuln/detail/CVE-2020-27216, https://nvd.nist.gov/vuln/detail/CVE-2020-27223, https://nvd.nist.gov/vuln/detail/CVE-2020-27218)
	- licenses/http2-client-9.4.27.v20200227.jar.sha1 -> licenses/http2-client-9.4.38.v20210224.jar.sha1
	- dist/solrj-lib/http2-client-9.4.27.v20200227.jar -> dist/solrj-lib/http2-client-9.4.38.v20210224.jar
	- server/solr-webapp/webapp/WEB-INF/lib/http2-client-9.4.27.v20200227.jar -> server/solr-webapp/webapp/WEB-INF/lib/http2-client-9.4.38.v20210224.jar
	- licenses/http2-common-9.4.27.v20200227.jar.sha1 -> licenses/http2-common-9.4.38.v20210224.jar.sha1
	- server/lib/http2-common-9.4.27.v20200227.jar -> server/lib/http2-common-9.4.38.v20210224.jar
	- dist/solrj-lib/http2-common-9.4.27.v20200227.jar -> dist/solrj-lib/http2-common-9.4.38.v20210224.jar
	- server/solr-webapp/webapp/WEB-INF/lib/http2-common-9.4.27.v20200227.jar -> server/solr-webapp/webapp/WEB-INF/lib/http2-common-9.4.38.v20210224.jar
	- licenses/http2-hpack-9.4.27.v20200227.jar.sha1 -> licenses/http2-hpack-9.4.38.v20210224.jar.sha1
	- server/lib/http2-hpack-9.4.27.v20200227.jar -> server/lib/http2-hpack-9.4.38.v20210224.jar
	- dist/solrj-lib/http2-hpack-9.4.27.v20200227.jar -> dist/solrj-lib/http2-hpack-9.4.38.v20210224.jar
	- server/solr-webapp/webapp/WEB-INF/lib/http2-hpack-9.4.27.v20200227.jar -> server/solr-webapp/webapp/WEB-INF/lib/http2-hpack-9.4.38.v20210224.jar
	- licenses/http2-http-client-transport-9.4.27.v20200227.jar.sha1 -> licenses/http2-http-client-transport-9.4.27.v20200227.jar.sha1
	- dist/solrj-lib/http2-http-client-transport-9.4.27.v20200227.jar -> dist/solrj-lib/http2-http-client-transport-9.4.38.v20210224.jar
	- server/solr-webapp/webapp/WEB-INF/lib/http2-http-client-transport-9.4.27.v20200227.jar -> server/solr-webapp/webapp/WEB-INF/lib/http2-http-client-transport-9.4.38.v20210224.jar
	- licenses/http2-server-9.4.27.v20200227.jar.sha1 -> licenses/http2-server-9.4.38.v20210224.jar.sha1
	- server/lib/http2-server-9.4.27.v20200227.jar -> server/lib/http2-server-9.4.38.v20210224.jar
	- licenses/jetty-alpn-client-9.4.27.v20200227.jar.sha1 -> licenses/jetty-alpn-client-9.4.38.v20210224.jar.sha1
	- dist/solrj-lib/jetty-alpn-client-9.4.27.v20200227.jar -> dist/solrj-lib/jetty-alpn-client-9.4.38.v20210224.jar
	- server/solr-webapp/webapp/WEB-INF/lib/jetty-alpn-client-9.4.27.v20200227.jar -> server/solr-webapp/webapp/WEB-INF/lib/jetty-alpn-client-9.4.38.v20210224.jar
    - licenses/jetty-alpn-java-client-9.4.27.v20200227.jar.sha1 -> licenses/jetty-alpn-java-client-9.4.38.v20210224.jar.sha1
	- dist/solrj-lib/jetty-alpn-java-client-9.4.27.v20200227.jar -> dist/solrj-lib/jetty-alpn-java-client-9.4.38.v20210224.jar
	- server/solr-webapp/webapp/WEB-INF/lib/jetty-alpn-java-client-9.4.27.v20200227.jar -> server/solr-webapp/webapp/WEB-INF/lib/jetty-alpn-java-client-9.4.38.v20210224.jar
	- licenses/jetty-alpn-java-server-9.4.27.v20200227.jar.sha1 -> licenses/jetty-alpn-java-server-9.4.38.v20210224.jar.sha1
	- server/lib/jetty-alpn-java-server-9.4.27.v20200227.jar -> server/lib/jetty-alpn-java-server-9.4.38.v20210224.jar
	- licenses/jetty-alpn-server-9.4.27.v20200227.jar.sha1 -> licenses/jetty-alpn-server-9.4.38.v20210224.jar.sha1
	- server/lib/jetty-alpn-server-9.4.27.v20200227.jar -> server/lib/jetty-alpn-server-9.4.38.v20210224.jar
	- licenses/jetty-client-9.4.27.v20200227.jar.sha1 -> licenses/jetty-client-9.4.38.v20210224.jar.sha1
	- dist/solrj-lib/jetty-client-9.4.27.v20200227.jar -> dist/solrj-lib/jetty-client-9.4.38.v20210224.jar
	- server/solr-webapp/webapp/WEB-INF/lib/jetty-client-9.4.27.v20200227.jar -> server/solr-webapp/webapp/WEB-INF/lib/jetty-client-9.4.38.v20210224.jar
	- licenses/jetty-continuation-9.4.27.v20200227.jar.sha1 -> licenses/jetty-continuation-9.4.38.v20210224.jar.sha1
	- server/lib/jetty-continuation-9.4.27.v20200227.jar -> server/lib/jetty-continuation-9.4.38.v20210224.jar
	- licenses/jetty-deploy-9.4.27.v20200227.jar.sha1 -> licenses/jetty-deploy-9.4.38.v20210224.jar.sha1
	- server/lib/jetty-deploy-9.4.27.v20200227.jar -> server/lib/jetty-deploy-9.4.38.v20210224.jar
	- licenses/jetty-http-9.4.27.v20200227.jar.sha1 -> licenses/jetty-http-9.4.38.v20210224.jar.sha1
	- server/lib/jetty-http-9.4.27.v20200227.jar -> server/lib/jetty-http-9.4.38.v20210224.jar
	- dist/solrj-lib/jetty-http-9.4.27.v20200227.jar -> dist/solrj-lib/jetty-http-9.4.38.v20210224.jar
	- server/solr-webapp/webapp/WEB-INF/lib/jetty-http-9.4.27.v20200227.jar -> server/solr-webapp/webapp/WEB-INF/lib/jetty-http-9.4.38.v20210224.jar
	- licenses/jetty-io-9.4.27.v20200227.jar.sha1 -> licenses/jetty-io-9.4.38.v20210224.jar.sha1
	- server/lib/jetty-io-9.4.27.v20200227.jar -> server/lib/jetty-io-9.4.38.v20210224.jar
	- dist/solrj-lib/jetty-io-9.4.27.v20200227.jar -> dist/solrj-lib/jetty-io-9.4.38.v20210224.jar
	- server/solr-webapp/webapp/WEB-INF/lib/jetty-io-9.4.27.v20200227.jar -> server/solr-webapp/webapp/WEB-INF/lib/jetty-io-9.4.38.v20210224.jar
	- licenses/jetty-jmx-9.4.27.v20200227.jar.sha1 -> licenses/jetty-jmx-9.4.38.v20210224.jar.sha1
	- server/lib/jetty-jmx-9.4.27.v20200227.jar -> server/lib/jetty-jmx-9.4.38.v20210224.jar
	- licenses/jetty-rewrite-9.4.27.v20200227.jar.sha1 -> licenses/jetty-rewrite-9.4.38.v20210224.jar.sha1
	- server/lib/jetty-rewrite-9.4.27.v20200227.jar -> server/lib/jetty-rewrite-9.4.38.v20210224.jar
	- licenses/jetty-security-9.4.27.v20200227.jar.sha1 -> licenses/jetty-security-9.4.38.v20210224.jar.sha1
	- server/lib/jetty-security-9.4.27.v20200227.jar -> server/lib/jetty-security-9.4.38.v20210224.jar
	- licenses/jetty-server-9.4.27.v20200227.jar.sha1 -> licenses/jetty-server-9.4.38.v20210224.jar.sha1
	- server/lib/jetty-server-9.4.27.v20200227.jar -> server/lib/jetty-server-9.4.38.v20210224.jar
	- licenses/jetty-servlet-9.4.27.v20200227.jar.sha1 -> licenses/jetty-servlet-9.4.38.v20210224.jar.sha1
	- server/lib/jetty-servlet-9.4.27.v20200227.jar -> server/lib/jetty-servlet-9.4.38.v20210224.jar
	- licenses/jetty-servlets-9.4.27.v20200227.jar.sha1 -> licenses/jetty-servlets-9.4.38.v20210224.jar.sha1
	- server/lib/jetty-servlets-9.4.27.v20200227.jar -> server/lib/jetty-servlets-9.4.38.v20210224.jar
	- licenses/jetty-util-9.4.27.v20200227.jar.sha1 -> licenses/jetty-util-9.4.38.v20210224.jar.sha1
	- server/lib/jetty-util-9.4.27.v20200227.jar -> server/lib/jetty-util-9.4.38.v20210224.jar
	- dist/solrj-lib/jetty-util-9.4.27.v20200227.jar -> dist/solrj-lib/jetty-util-9.4.38.v20210224.jar
	- server/solr-webapp/webapp/WEB-INF/lib/jetty-util-9.4.27.v20200227.jar -> server/solr-webapp/webapp/WEB-INF/lib/jetty-util-9.4.38.v20210224.jar
	- licenses/jetty-webapp-9.4.27.v20200227.jar.sha1 -> licenses/jetty-webapp-9.4.38.v20210224.jar.sha1
	- server/lib/jetty-webapp-9.4.27.v20200227.jar -> server/lib/jetty-webapp-9.4.38.v20210224.jar
	- licenses/jetty-xml-9.4.27.v20200227.jar.sha1 -> licenses/jetty-xml-9.4.38.v20210224.jar.sha1
	- server/lib/jetty-xml-9.4.27.v20200227.jar -> server/lib/jetty-xml-9.4.38.v20210224.jar
- hadoop-hdfs-client library (due to https://nvd.nist.gov/vuln/detail/CVE-2020-9492)
	- licenses/hadoop-hdfs-client-3.2.0.jar.sha1 -> licenses/hadoop-hdfs-client-3.2.2.jar.sha1
	- server/solr-webapp/webapp/WEB-INF/lib/hadoop-hdfs-client-3.2.0.jar -> server/solr-webapp/webapp/WEB-INF/lib/hadoop-hdfs-client-3.2.2.jar
- velocity-engine-core library (due to https://nvd.nist.gov/vuln/detail/CVE-2020-13936)
    - licenses/velocity-engine-core-2.0.jar.sha1 -> licenses/velocity-engine-core-2.3.jar.sha1
    - contrib/velocity/lib/velocity-engine-core-2.0.jar -> contrib/velocity/lib/velocity-engine-core-2.3.jar
- libthrift library (due to https://nvd.nist.gov/vuln/detail/CVE-2020-13949)
    - licenses/libthrift-0.13.0.jar.sha1 -> licenses/libthrift-0.14.0.jar.sha1
    - contrib/jaegertracer-configurator/lib/libthrift-0.13.0.jar -> contrib/jaegertracer-configurator/lib/libthrift-0.14.0.jar
- guava library (due to https://nvd.nist.gov/vuln/detail/CVE-2020-8908)
    - licenses/guava-25.1-jre.jar.sha1 -> licenses/guava-30.0-jre.jar.sha1
    - server/solr-webapp/webapp/WEB-INF/lib/guava-25.1-jre.jar -> server/solr-webapp/webapp/WEB-INF/lib/guava-30.0-jre.jar


